class Game < ActiveRecord::Base
  # Remember to create a migration!
  has_many :game_histories

  def self.find_available_games
  	@games = Game.where(player_two_id: nil)
  end

  def find_player_one(game_id)
  	game = Game.find(game_id)
  	@user = User.find(game.player_one_id)
  	return @user.name
  end

  def find_player_two(game_id)
  	game = Game.find(game_id)
  	@user = User.find(game.player_two_id)
  	return @user.name
  end
end
