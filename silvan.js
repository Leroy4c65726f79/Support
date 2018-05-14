$(window).scroll(function(){
    if ($(window).scrollTop() >= $(window).height()-$( window ).height()/10) {
      $('#navtop').css({"position": "fixed", "top": "0"});
    }
    else {
      $('#navtop').css({"position": "relative", "top": " "});
    }
});