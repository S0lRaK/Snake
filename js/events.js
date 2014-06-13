var events = {
	changeSnakeColor: function(){
		$('#changeSnakeColor').unbind('keypress').keypress(function(event){
			if ($(this).val().match(/0/)) {
				$('.bodypart').css({background : 'blue'});
			}
			if ($(this).val().match(/1/)) {
				$('.bodypart').css({background : 'white'});
			}
		});
	}
	saveCookie: function(cookie){
		$.cookie('roundNum', cookie);
	},
	extractCookie: function(){
		if ($.cookie('roundNum') == null) {
			alert("There are not cookies available.")
		}else{
			config.roundNum = $.cookie('roundNum');
			alert(config.roundNum);
		}
	}
};