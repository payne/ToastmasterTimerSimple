
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
					if (this.count > 10) {
						 $('.clock').css('background-color', 'red')
					}
				}
		        }
		    });

		});
