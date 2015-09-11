class GameHistories < ActiveRecord::Migration
  def change
  	create_table :game_histories do |t|
  		t.integer :game_id
  		t.string :history
  		t.timestamps null: false
  	end
  end
end
