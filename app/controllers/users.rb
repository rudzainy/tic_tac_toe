post '/login' do

	@username = params[:username]
	password = params[:password]

	if params[:action] == "login"
		if User.authenticate(@username	, password)
			session[:user_id] = User.find_by(username: @username).id
			session[:username] = @username
			redirect to "/lobby"
		else
			@flash = "Invalid username or password!"
			erb :index
		end
	elsif params[:action] == "signup"
		session[:user_id] = User.create(username: @username, password: password)
		redirect to "/lobby"
	end
end

	

get '/logout' do

	session[:user_id] = nil
	session[:username] = nil
	@flash = "You are successfulley logged out."
	erb :index
end