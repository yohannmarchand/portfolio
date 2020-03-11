const Parallax = require('parallax-js');

var sceneTitle = document.getElementById('scenetitle');
var parallaxInstance = new Parallax(sceneTitle);

var scenePresentation = document.getElementById('scenepresentation');
var parallaxInstance = new Parallax(scenePresentation);


$(".open").click(function () {


  container = $(this).parent().parent();
  container.parent().children().css('display', 'none');
  container.addClass('show');

  $('.close').show()
  $(this).hide()


})

$('.close').click(function () {

  container = $(this).parent().parent();
  container.parent().children().css('display', 'block');
  container.removeClass('show');
  $('.close').hide();
  $('.open').show()



})