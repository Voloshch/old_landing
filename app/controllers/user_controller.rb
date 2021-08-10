class UserController < ApplicationController
  # skip_before_action :verify_authenticity_token
  # before_action :accept_all_params

  def send_mail
    UserMailer.welcome_email(mail_params).deliver_later!
    UserMailer.new_request(mail_params).deliver_later!
    render json: {'success': true}
  rescue Exception => e
    logger.info("error while sending mail, #{mail_params}" )
    render json: { error: 'Wrong parameter values' }, status: :unprocessable_entity
  end

  def configuration
    UserMailer.config_email(params.permit!).deliver_later!
    render json: {'success': true}
  rescue Exception => e
    logger.info("error while sending mail" )
    render json: { error: 'Wrong parameter values' }, status: :unprocessable_entity
  end

  private

  def mail_params
    params.permit(:name, :email, :phone, :comment, :language)
  end

  # def config_params
  #   params.permit!(:user => {}, :services => {})
  # end

  # def accept_all_params
  #   params.permit!
  # end
end
