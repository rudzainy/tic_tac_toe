$(document).ready(function() {
  console.log( "ready!" );

  drawTable();

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
  			$('#board-container').append('<div id="box">x</div>')
  			col++;
  		}
  		$('#board-container').append('</div>')
  		row++;
  	}	
  };
});
