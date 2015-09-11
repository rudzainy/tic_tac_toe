$(document).ready(function() {

  game_state = "02x11o20x22o00x";
  player_shape = "x"
	drawTable();
	populateTable(game_state);
	getMove();
  
});

function drawTable(){
	row = 0;
	index = 0;
	while(row < 3) {
		if(row == 0){
			position = "left";
		}
		else if(row == 1){
			position = "center";
		}
		else{
			position = "right";
		}

		$('#board-container').append('<div id="row-' + position + '">')
		col = 0;
		while(col < 3) {
			if(index % 2 == 0){
				$('#board-container').append('<button id="' + row + '' + col + '" class="box"></button>')
			}else{
				$('#board-container').append('<button id="' + row + '' + col + '" class="box" style="background-color: #00DAAB;"></button>')
			}
			index++;
			col++;
		}
		$('#board-container').append('</div>')
		row++;
	}	
};

function populateTable(game_state){ // Import game state
	moves = game_state.match(/(.{3})/g);
	for(count = 0; count < moves.length; count++){
		var box = document.getElementById('' + parseInt(moves[count][0]) + parseInt(moves[count][1]) + '');
		box.innerHTML = moves[count][2];
	};
};

function getMove(){
	// alert("In!");
	$(document).on('click', '.box', function(event){
		debugger
		box_id = $(this).attr('id');
		game_state += box_id + player_shape;
		var box = document.getElementById('' + parseInt(box_id[0]) + parseInt(box_id[1]) + '');
		box.innerHTML = player_shape;
		
		var all_box = document.getElementsByClassName('box')
		$.each(all_box, function(index, box){
			box.disabled = true;
		});
	});
};

function winningCondition(){
	
}