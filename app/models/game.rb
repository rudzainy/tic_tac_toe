class Game < ActiveRecord::Base

  has_many :game_histories

  def self.find_available_games
    Game.where(player2_id: nil)
  end

  def self.find_new_games(current_user_id)
    games = []
    Game.where(player2_id: nil).each do |g|
      if (Time.now - g.created_at)/1.seconds < 10
        if g.player1_id != current_user_id
          games << { id: g.id, player1: g.find_player_one }
        end
      end
    end
    games
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
