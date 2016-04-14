$(document).ready(function() {

	// Import current game state from the server
  game_state = "2x4o6x8o0x";

  // Set the player's shape either x or o
  player_shape = $('#player_shape').val();

	drawBoard();
	populateBoard(game_state);
	playerMove();

	// replayGame(game_state);

});

// Draws the game board
function drawBoard(){

	var row = 0;
	var index = 0;

	// Iterate each row of the board
	while(row < 3){
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
				$('#board-container').append('<button id="' + index + '" class="box"></button>')
			}else{
				$('#board-container').append('<button id="' + index + '" class="box" style="background-color: #FFD64A;"></button>')
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
	var moves = game_state.match(/(.{2})/g);

	// Insert moves into coresponding boxes
	$.each(moves, function(index, value){
		var box = document.getElementById(value[0]);
		box.innerHTML = moves[index][1];
	});
};

// Waits for the player to make a move and processes it
function playerMove(){
	$(document).on('click', '.box', function(event){
		var box_id = $(this).attr('id');

		// Checks if the clicked box is empty
		if($(this).text() == ""){

			// Updates the game state
			game_state += box_id + player_shape;

			// Display the last move on the board
			var box = document.getElementById(box_id[0]);
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
		if(winningCondition(box_id) === true){
			winner = player;
			debugger;
		}
	});
};

// Check the board for a winner
function winningCondition(current_box){

	if(current_box[0] === "0"){
		box = document.getElementById(current_box[1]).textContent();

	}
	return false;
};

// // Get value of two other boxes
// function getBoxValue(box_id){
// 	box = document.getElementById((parseInt(box_id[0]) + 1).toString() + box_id[1]);
// 	return box.textContent;
// };

// // Get value of box diagonal left below
// function boxBelowLeft(box_id){
// 	box = document.getElementById("1" + (parseInt(box_id[1]) + 1).toString().textContent);
// 	box[2];
// };

// Replays the entire game tep by step
function replayGame(game_state){

	// Chops off the moves from a string into an array
	var moves = game_state.match(/(.{2})/g);

	// Insert moves into coresponding boxes
	$.each(moves, function(index, value){
		var box = document.getElementById(value[0]);

		// Set delay to 1.5 seconds
		setTimeout(function(){
			box.innerHTML = moves[index][1];
		}, index * 1500);
	});
};