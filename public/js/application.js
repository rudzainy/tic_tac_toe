$(document).ready(function() {

	// Import current game state from the server
  game_state = "02x11o20x22o00x";

  // Set the player's shape either x or o
  player_shape = "x"

	drawBoard();
	populateBoard(game_state);
	playerMove();
  
});

// Draws the game board
function drawBoard(){
	
	var row = 0;
	var index = 0;

	// Iterate each row of the board
	while(row < 3) {
		if(row === 0){
			var position = "left";
		}
		else if(row === 1){
			var position = "center";
		}
		else{
			var position = "right";
		}

		// Add a container div for rows
		$('#board-container').append('<div id="row-' + position + '">')
		var col = 0;

		// Iterate each column in the row
		while(col < 3) {

			// Condition to draw checkered board
			if(index % 2 === 0){
				$('#board-container').append('<button id="' + row + '' + col + '" class="box"></button>')
			}else{
				$('#board-container').append('<button id="' + row + '' + col + '" class="box" style="background-color: #FFD64A;"></button>')
			}
			index++;
			col++;
		}
		$('#board-container').append('</div>')
		row++;
	}	
};

// Populate board with previous moves
function populateBoard(game_state){

	// Chops off the moves from a string into an array
	var moves = game_state.match(/(.{3})/g);

	// Insert moves into coresponding boxes
	for(count = 0; count < moves.length; count++){
		var box = document.getElementById('' + parseInt(moves[count][0]) + parseInt(moves[count][1]) + '');
		box.innerHTML = moves[count][2];
	};
};

// Waits for the player to make a move and processes it
function playerMove(){
	$(document).on('click', '.box', function(event){
		var box_id = $(this).attr('id');

		// Checks if the clicked box is empty
		if($(this).text() == ""){
			debugger

			// Updates the game state
			game_state += box_id + player_shape;

			// Display the last move on the board
			var box = document.getElementById('' + parseInt(box_id[0]) + parseInt(box_id[1]) + '');
			box.innerHTML = player_shape;
			
			// Disable the entire board
			var all_box = document.getElementsByClassName('box')
			$.each(all_box, function(index, box){
				box.disabled = true;
			});
		}else{
			// If the box is not empty, do nothing and wait for player's input
			playerMove();
		};
	});
};

// Check the board for a winner
function winningCondition(){
	
}