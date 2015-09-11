$(document).ready(function() {

  game_state = "01x02o";
	drawTable();
	populateTable(game_state);
  
});

function drawTable(){
	row = 0;
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
			$('#board-container').append('<button id="box[' + row + '][' + col + ']" class="box"></button>')
			col++;
		}
		$('#board-container').append('</div>')
		row++;
	}	
};

function populateTable(game_state){ // Import game state
	all_moves = game_state.match(/(.{3})/g);
	debugger
	for(count = 0; count < all_moves.length; count++){
		move = all_moves[count].split();
		$('#box[' + move[0] + '][' + move[1] + ']').value = move[2];
	}
};

String.prototype.scan = function (re) {
    if (!re.global) throw "ducks";
    var s = this;
    var m, r = [];
    while (m = re.exec(s)) {
        m.shift();
        r.push(m);
    }
    return r;
};