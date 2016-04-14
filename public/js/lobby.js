$(document).ready(function() {
	$("#start-new-game").on('click', function(event){
		event.preventDefault();
		alert("lala");
		$('#game-container').append("<div id='loading'>Adding new game...</div>");

		$.ajax {
			url: 		'/create_game',
			method: 'post'
		}.done(function(){
			$('#loading').remove();
			$('#game-container').append("<div id='loading'>Adding new game...</div>");
		})
	})
})