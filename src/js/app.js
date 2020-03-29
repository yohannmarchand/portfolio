
/* -------------------------------------------------------------------------- */
/*                                Realisations                                */
/* -------------------------------------------------------------------------- */

$(".open").click(function () {


  container = $(this).parent().parent();
  container.parent().children().css('display', 'none');
  container.addClass('show');

  $('.close').show();
  $(this).hide();
  $('.link').show();

  $('.realisation__techno').css("display" ,'block');
  $(".realisation__img").css("height" , "60%");


})

$('.close').click(function () {

  container = $(this).parent().parent();
  container.parent().children().css('display', 'block');
  container.removeClass('show');
  $('.close').hide();
  $('.open').show();
  $('.link').hide();

  $('.realisation__techno').css("display" ,'none');
  $(".realisation__img").css("height" , "35%");



})

/* -------------------------------------------------------------------------- */
/*                                    Font                                    */
/* -------------------------------------------------------------------------- */


$(".accessibility__font").click(function () {
  
  $('body').toggleClass('accessibility__font--active');
})

var fontSize = 18 ;

$('.accessibility__minus').click(function () {
  
  if (fontSize > 12) {
    fontSize = fontSize - 1;
    $('html').css('font-size', fontSize+ 'px');
    //console.log(fontSize , $('html').css('font-size'));
  }
})

$('.accessibility__default').click(function () {
  
    fontSize = 18;
    $('html').css('font-size', fontSize+ 'px');
})

$('.accessibility__more').click(function () {
  
  if (fontSize < 21) {
    fontSize = fontSize + 1;
    $('html').css('font-size', fontSize+ 'px');
    //console.log(fontSize , $('html').css('font-size'));
  }
})

/* -------------------------------------------------------------------------- */
/*                                 Burger Menu                                */
/* -------------------------------------------------------------------------- */

$('.fa-bars').click(function (){

  $('.responsiveNavBar').css('height','10%');
})

$('.fa-times').click(function (){

  $('.responsiveNavBar').css('height','0px');
})

$('.responsiveNavBar__link').click(function (){

  $('.responsiveNavBar').css('height','0px');
})

