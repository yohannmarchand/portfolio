


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