$('#background').parallax({imageSrc:'../assets/love1.jpg'});
$('#quienes').parallax({imageSrc:'../assets/mision_vision.jpg'});
$('#contactanos').parallax({imageSrc:'../assets/contactlast.jpg'});


/*=======MENU  NAVBAR DOWN===================*/
    $(".1li").click(function() {
      $("html, body").animate({
        scrollTop: $("#que").offset().top
      }, "slow");
    });

    $(".2li").click(function() {
      $("html, body").animate({
        scrollTop: $("#quienes").offset().top
      }, "slow");
    });

    $(".3li").click(function() {
      $("html, body").animate({
        scrollTop: $("#servicios").offset().top
      }, "slow");
    });

  $(".5li").click(function() {
    $("html, body").animate({
      scrollTop: $("#contactanos").offset().top
    }, "slow");
  });

$.fn.isOn = function(){
    var win = $(window);
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
 
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
 
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

$(window).scroll(function(){
    if($("#queM").isOn()){
     	$(".1li").addClass("activoyellow");

    }else {
    	$(".1li").removeClass("activoyellow");
    	$(".1li").blur();
    }

    if($("#quienesM").isOn()){
     	$(".2li").addClass("activoyellow");
    }else {
    	$(".2li").removeClass("activoyellow");
    	$(".2li").blur();
    }

    if($("#serviciosM").isOn()){
     	$(".3li").addClass("activoyellow");
    }else {
    	$(".3li").removeClass("activoyellow");
    	$(".3li").blur();
    }

    if($("#contactanosM").isOn()){
     	$(".5li").addClass("activoyellow");
    }else {
    	$(".5li").removeClass("activoyellow");
    	$(".5li").blur();
    }
});


