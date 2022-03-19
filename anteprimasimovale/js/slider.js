var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();

jQuery(document).ready(function ($) {

  // $('#checkbox').change(function(){
  //   setInterval(function () {
  //       moveRight();
  //   }, 3000);
  // });

	var slideCount = $('#slider ul li').length;
  slideWidth = $('#slider ul li').width();
  slideHeight = $('#slider ul li').height();
  sliderUlWidth = slideCount * slideWidth;
  $('#slider').css({ width: slideWidth, height: slideHeight });
  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

  $(window).resize(function () {
    if($( window ).width()<980){
      waitForFinalEvent(function(){
        moveRight();
      }, 500, "resetslider");}
  });


  var int_Slide = setInterval(moveRight, 4000);


    $('#slider ul li:last-child').prependTo('#slider ul');


    function moveLeft() {
      slideWidth = $('#slider ul li').width();
      slideHeight = $('#slider ul li').height();
      sliderUlWidth = slideCount * slideWidth;
      $('#slider').css({ width: slideWidth, height: slideHeight });
    	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });


        $('#slider ul').animate({
            left: + slideWidth
        }, 800, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
      slideWidth = $('#slider ul li').width();
      slideHeight = $('#slider ul li').height();
      sliderUlWidth = slideCount * slideWidth;
      $('#slider').css({ width: slideWidth, height: slideHeight });
      $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
        $('#slider ul').animate({
            left: - slideWidth
        }, 800, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function (e) {
      e.preventDefault();
      clearInterval(int_Slide);
      moveLeft();
      int_Slide = setInterval(moveRight, 4000);
    });

    $('a.control_next').click(function (e) {
      e.preventDefault();
      clearInterval(int_Slide);
      moveRight();
      int_Slide = setInterval(moveRight, 4000);
    });


});
