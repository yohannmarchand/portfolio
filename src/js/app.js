
/* -------------------------------------------------------------------------- */
/*                                Realisations                                */
/* -------------------------------------------------------------------------- */

import * as data from './../json/lang/index.json';

console.log(data);


$(".open").click(function () {


  container = $(this).parent().parent();
  container.parent().children().css('display', 'none');
  container.addClass('show');

  $('.close').show();
  $(this).hide();
  $('.link').show();

  $('.realisation__techno').css("display" ,'block');
  $(".realisation__img").css("height" , "500px");


})

$('.close').click(function () {

  container = $(this).parent().parent();
  container.parent().children().css('display', 'block');
  container.removeClass('show');
  $('.close').hide();
  $('.open').show();
  $('.link').hide();

  $('.realisation__techno').css("display" ,'none');
  $(".realisation__img").css("height" , "200px");



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


/* -------------------------------------------------------------------------- */
/*                                 Multilangue                                */
/* -------------------------------------------------------------------------- */



var lang;

const changeLang = (lang, file) => {
  
  console.log(lang , file);
  localStorage.setItem('lang' , lang);
  
  if( file == '/' || file == '/index.html'){
    file = "index";
  
    if (lang == "en") {
      var curentData = data[0].index;
      var nextLang = 'en';
    } else {
      var curentData = data[1].index;
      var nextLang = 'fr';
    }
  
  
  
    $.each(curentData, function( index, value ) {
      $("."+index).html(value);
    });
  
  
  }
  else{
    file = "mention";

    if (lang == "en") {
      var curentData = data[0].mention;
    } else {
      var curentData = data[1].mention;
    }
  }

  $.each(curentData, function( index, value ) {
    $("."+index).html(value);
  });

  };



if (window.localStorage.length == 0) {
  lang= 'fr';
  localStorage.setItem('lang' , lang);

}
else{
  lang = window.localStorage.lang
}

console.log(lang)

changeLang(lang ,window.location.pathname );




 $(".lang").click( () => {
    var $this = $(".lang");
    lang = $this.val();

    var fileName = window.location.pathname;
    
    if( lang == 'en'){
      $(".lang").html('Français');
      $(".lang").val('fr');
    }
    else{
      $(".lang").html('English');
      $(".lang").val('en');
    }

    changeLang(lang , fileName);
     
  

 })

