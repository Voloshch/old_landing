class SessionsController < ApplicationController
  before_action :find_user, only: %i[show destroy]
  before_action :create_user, only: %i[create]

  def show
    @user.token == request.headers['Token'] ? head(:ok) : head(:unauthorized)
  end

  def destroy
    if @user.token == request.headers['Token']
      @user.token = nil
      if @user.save
        head(:ok)
      else
        head(:unauthorized)
      end
    else
      head(:unauthorized)
    end
  end

  def create
    permission = create_openid_session(params[:email])
    if permission
      token = encode_token({id: @user.id, email: @user.email})
      @user.update(token: token)
      render json: {email: @user.email, user_token: @user.token}, status: :created
    else
      head(:unauthorized)
    end
  end

  private

  def find_user
    @user = User.find_by(email: request.headers['Email'])
    render json: { error: 'Cannot find a user' }, status: :unprocessable_entity unless @user
  end

  def create_user
    @user = User.find_by(email: params[:email])
    render json: { error: 'Cannot find a user' }, status: :unauthorized unless @user
  end

  def decode(token)
    decoded = JWT.decode(token, SECRET_KEY)[0]
    HashWithIndifferentAccess.new decoded
  end

  def encode_token(payload={})
    exp = 24.hours.from_now
    payload[:exp] = exp.to_i
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end

  def create_openid_session(emaill)
    res = log_in_to_keycloack
    @user = User.find_by(email: emaill)
    @user.permission == true && res.code_type == Net::HTTPOK
  end

  def log_in_to_keycloack
    uri = URI 'https://login.icdc.io/auth/realms/master/protocol/openid-connect/token'
    req = Net::HTTP::Post.new(uri.path, 'Content-Type' => 'application/x-www-form-urlencoded')

    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    req.set_form_data(keycloack_params)

    http.request(req)
  end

  def keycloack_params
    {
      username: params[:email],
      password: params[:password],
      client_id: 'landing',
      grant_type: 'password',
      client_secret: 'f5a50a1c-be22-4195-9f62-84fadeb5b245'
    }
  end

end
