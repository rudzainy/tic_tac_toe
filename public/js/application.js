$(document).ready(function() {

  game_state = "01o02o";
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
			$('#board-container').append('<div id="box[' + row + '][' + col + ']" class="box">x</div>')
			col++;
		}
		$('#board-container').append('</div>')
		row++;
	}	
};

function populateTable(game_state){ // Import game state
	moves = game_state.match(/(.{3})/g);
	debugger
	for(count = 0; count < moves.length; count++){
		var box = document.getElementById('box[' + parseInt(moves[count][0]) + '][' + parseInt(moves[count][1]) + ']');
		box.innerHTML = moves[count][2];
	};
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