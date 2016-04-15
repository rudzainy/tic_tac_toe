get '/' do
  if logged_in?
    @username = User.find(session[:user_id])
    @games = Game.find_available_games
    erb :lobby
  else
    @username = ""
    erb :index
  end
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

get '/update_lobby' do
  Game.find_new_games(current_user.id).to_json
end

# FOR REFRESHING AVAILABLE GAMES IN LOBBY
get '/table' do
  @username = User.find(session[:user_id])
  @games = Game.find_available_games
  erb :lobby #, layout: false
end
