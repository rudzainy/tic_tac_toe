class User < ActiveRecord::Base
  # Remember to create a migration!

  def self.authenticate(username, password)
  	check = self.find_by username: username, password: password
  	if check == nil
  		false
  	else
  		true
  	end
  end

  def current_user
  	if session[:user_id]
  		@current_user ||= User.find(session[:user_id])
  	end
  end

  def logged_in?
  	current_user
  end
end