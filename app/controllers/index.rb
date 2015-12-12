get '/' do
  # Look in app/views/index.erb
  @username = ""
  erb :index
end

# LOBBY
get '/lobby' do
	if session[:user_id].nil?
		redirect to('/')
	else
		@username = User.find(session[:user_id])
		@games = Game.find_available_games
		erb :lobby
	end
end

# FOR REFRESHING AVAILABLE GAMES IN LOBBY
get '/table' do
	@username = User.find(session[:user_id])
	@games = Game.find_available_games
	erb :lobby , layout: false
end
