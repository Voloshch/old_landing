class UserMailer < ApplicationMailer

  def welcome_email(user)
    @user = user
    I18n.with_locale(user[:language]) do
      mail(from: 'ICDC <info@icdc.io>', to: @user[:email], subject: I18n.t('user_mailer.welcome_email.subject'))
    end
  end

  def new_request(params)
    @user = params
    mail(from: 'www.icdc.io <info@icdc.io>', to: 'info@icdc.io', subject: 'Новая заявка с сайта icdc.io')
  end

  def config_email(config)
    # @config = config.html_safe
    @user = config[:user]
    @services = config[:services]
    mail(from: 'test', to: 'info@icdc.io', subject: 'Конфигурация с сайта icdc.io')
  end

end
