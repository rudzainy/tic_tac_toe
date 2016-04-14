get '/create_game' do
	session[:game_id] = Game.create(player1_id: current_user.id)
	{ id: session[:game_id].id, player1: session[:game_id].find_player_one }.to_json
	# redirect to '/lobby'
end

get '/join_game/:game_id' do
	game = Game.find(params[:game_id])
	game.update(player2_id: current_user.id)
	redirect to "/game/#{game.id}"
end

get '/game/:game_id' do
	@game = Game.find(params[:game_id])
	if current_user.id == @game.player1_id
		@player_shape = "x"
	else
		@player_shape = "o"
	end
	erb :game
end