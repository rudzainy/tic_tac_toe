class Game < ActiveRecord::Base

  has_many :game_histories

  def self.find_available_games
  	Game.where(player2_id: nil)
  end

  def find_player_one
  	game = Game.find(self.id)
  	user = User.find(game.player1_id)
  	return user.username
  end

  def find_player_two
  	game = Game.find(self.id)
  	user = User.find(game.player2_id)
  	return user.username
  end
end
