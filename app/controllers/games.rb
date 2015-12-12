get '/create_game' do
	session[:game_id] = Game.create(player1_id: current_user.id)
	redirect to '/lobby'
end

get '/join_game/:game_id' do
	game = Game.find(params[:game_id])
	game.update(player2_id: current_user.id)
	redirect to '/game/#{game.id}'
end

get '/game/:game_id' do
	@game = Game.find(params[:game_id])
	erb :game
end