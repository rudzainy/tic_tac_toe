class GameHistory < ActiveRecord::Base
  # Remember to create a migration!
  belongs_to :game
end
