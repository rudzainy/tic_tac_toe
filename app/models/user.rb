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
end
