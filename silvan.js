$(document).ready(function() {
  $(window).scroll(function(){
      if ($(window).scrollTop() >= $(window).height() * 0.9) { //zieht auch 10% ab. hoffe es funktioniert.
        $('#navtop').css({"position": "fixed", "top": "0"});
      }
      else {
        $('#navtop').css({"position": "relative", "top": " "});
      }
  });
});
