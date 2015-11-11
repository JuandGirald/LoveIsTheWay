class NotificationsMailer < ActionMailer::Base

  default :from => "loveistheway17@gmail.com", to: "loveistheway17@gmail.com"

  def new_message(message)
    @message = message
    mail(:subject => "#{message.subject}")
  end

end
