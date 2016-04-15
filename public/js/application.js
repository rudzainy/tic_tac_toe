$(document).ready(function(){

(function polling() {
	setTimeout(function() {
		$.ajax({
			url: "/update_lobby",
			success: function(games) {
				$.each(games, function(index, game){
					$('#game-list').append("\
						<div class='left p-top-10'>\
		          " + game.player1 + "\
		        </div>\
		        <div class='right p-bottom-10'>\
		          <a href='/join_game/" + game.id + "'><button class='button'>Join game</button></a>\
		        </div>\
		        <div class='clearfix'></div>\
		        <hr>\
		      ");
				});
		}, dataType: "json", complete: polling });
	}, 10000);
})();

	$("#start-new-game").on('click', function(event){
		event.preventDefault();
		$('#start-game-container').append("<div id='loading'><img src='/image/loading.gif'></div><div class='clearfix'></div>");

		$.ajax({
			url: 		'/create_game',
			method: 'post',
			dataType: 'json',
			success: function(game){
				setTimeout(
					function(){
						$('#loading').remove();
						$('#game-list').append("<div class='left p-top-10'>\
							" + game.player1 + "\
						</div>\
						<div class='right p-bottom-10'>\
							<a href='/join_game/" + game.id + "%>'><button class='button disabled' disabled>Join game</button></a>\
						</div>\
						<div class='clearfix'></div>\
						<hr>");
					}, 3000);
			}
		})
	})
})