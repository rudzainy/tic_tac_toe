get '/lobby' do
	erb :lobby
end

get '/create_game' do
	session[:game_id] = Game.create(player1: session[:user_id])
	redirect to '/lobby'
end

get '/join_game/:game_id' do
	game = Game.find(params[:game_id])
	game.update(player2: session[:user_id])
	redirect to '/game/#{game}'
end

get '/game/:game_id' do
	erb :game
end