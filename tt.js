		var clock;
		
		$(document).ready(function() {
			var clock;

			clock = $('.clock').FlipClock(0, {
		        clockFace: 'MinuteCounter',
		        countdown: false,
		        callbacks: {
		        	stop: function() {
		        		$('.message').html('The clock has stopped!')
		        	},
				interval: function() { 
					console.log(this.count);
					if ((this.count > 10) && (this.count < 20)) {
						 $('.clock').css('background-color', 'GreenYellow');
             $('body').css('background-color','GreenYellow');
					} else if ((this.count > 20) && (this.count < 30)) {
						 $('.clock').css('background-color', 'yellow');
             $('body').css('background-color','yellow');
					} else if ((this.count > 30) && (this.count < 40)) {
						 $('.clock').css('background-color', 'red');
             $('body').css('background-color','red');
					}
				}
				}
    }
);

		});
