
// from http://stackoverflow.com/questions/19491336/get-url-parameter-jquery
var getUrlParameter=function(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}


$(document).ready(function() {

  var clock;
  var greenThreshold=getUrlParameter("g");
  var yellowThreshold=getUrlParameter("y");
  var redThreshold=getUrlParameter("r");
  var redWasSet=false;

  clock = $('.clock').FlipClock(0, {
         clockFace: 'MinuteCounter',
  countdown: false,
  callbacks: {
  stop: function() {
    $('.message').html('The clock has stopped!')
  },
  interval: function() { 
    console.log(this.count);
    if ((this.count > greenThreshold) && (this.count < yellowThreshold)) {
      $('.clock').css('background-color', 'GreenYellow');
      $('body').css('background-color','GreenYellow');
    } else if ((this.count > yellowThreshold) && (this.count < redThreshold)) {
      $('.clock').css('background-color', 'yellow');
      $('body').css('background-color','yellow');
    } else if ((this.count > redThreshold) && (!redWasSet)) {
      $('.clock').css('background-color', 'red');
      $('body').css('background-color','red');
      redWasSet=true;
    }
  }
}
});

});
