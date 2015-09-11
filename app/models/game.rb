class Game < ActiveRecord::Base
  # Remember to create a migration!
  has_many :game_histories
end
