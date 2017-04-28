$(document).ready(function(){

  $('.btn1').on({
    click: function(){
      $('html').addClass('modal-open');
    }
  });

  $('.close-button').on({
    click: function(){
      $('html').removeClass('modal-open');
    }
  });

  $('.modal1').on({
    click: function(event){
      if(event.target == this){
      $('html').removeClass('modal-open');
    }
    }
  });

  $('.btn2').on({
    click: function(){
      $('html').addClass('modal-open2');
    }
  });

  $('.close-button').on({
    click: function(){
      $('html').removeClass('modal-open2');
    }
  });

  $('.modal2').on({
    click: function(event){
      if(event.target == this){
      $('html').removeClass('modal-open2');
    }
    }
  });

  $('.btn3').on({
    click: function(){
      $('html').addClass('modal-open3');
    }
  });

  $('.close-button').on({
    click: function(){
      $('html').removeClass('modal-open3');
    }
  });

  $('.modal3').on({
    click: function(event){
      if(event.target == this){
      $('html').removeClass('modal-open3');
    }
    }
  });

  $('.btn4').on({
    click: function(){
      $('html').addClass('modal-open4');
    }
  });

  $('.close-button').on({
    click: function(){
      $('html').removeClass('modal-open4');
    }
  });

  $('.modal4').on({
    click: function(event){
      if(event.target == this){
      $('html').removeClass('modal-open4');
    }
    }
  });

  $('.btn5').on({
    click: function(){
      $('html').addClass('modal-open5');
    }
  });

  $('.close-button').on({
    click: function(){
      $('html').removeClass('modal-open5');
    }
  });

  $('.modal5').on({
    click: function(event){
      if(event.target == this){
      $('html').removeClass('modal-open5');
    }
    }
  });

  $('.btn6').on({
    click: function(){
      $('html').addClass('modal-open6');
    }
  });

  $('.close-button').on({
    click: function(){
      $('html').removeClass('modal-open6');
    }
  });

  $('.modal6').on({
    click: function(event){
      if(event.target == this){
      $('html').removeClass('modal-open6');
    }
    }
  });
  $('.btn7').on({
    click: function(){
      $('html').addClass('modal-open7');
    }
  });

  $('.close-button').on({
    click: function(){
      $('html').removeClass('modal-open7');
    }
  });

  $('.modal7').on({
    click: function(event){
      if(event.target == this){
      $('html').removeClass('modal-open7');
    }
    }
  });
  $('.btn8').on({
    click: function(){
      $('html').addClass('modal-open8');
    }
  });

  $('.close-button').on({
    click: function(){
      $('html').removeClass('modal-open8');
    }
  });

  $('.modal8').on({
    click: function(event){
      if(event.target == this){
      $('html').removeClass('modal-open8');
    }
    }
  });
  $('.btn9').on({
    click: function(){
      $('html').addClass('modal-open9');
    }
  });

  $('.close-button').on({
    click: function(){
      $('html').removeClass('modal-open9');
    }
  });

  $('.modal9').on({
    click: function(event){
      if(event.target == this){
      $('html').removeClass('modal-open9');
    }
    }
  });
  $('.btn10').on({
    click: function(){
      $('html').addClass('modal-open10');
    }
  });

  $('.close-button').on({
    click: function(){
      $('html').removeClass('modal-open10');
    }
  });

  $('.modal10').on({
    click: function(event){
      if(event.target == this){
      $('html').removeClass('modal-open10');
    }
    }
  });

  $('.btn11').on({
    click: function(){
      $('html').addClass('modal-open11');
    }
  });

  $('.close-button').on({
    click: function(){
      $('html').removeClass('modal-open11');
    }
  });

  $('.modal11').on({
    click: function(event){
      if(event.target == this){
      $('html').removeClass('modal-open11');
    }
    }
  });
  $('.btn12').on({
    click: function(){
      $('html').addClass('modal-open12');
    }
  });

  $('.close-button').on({
    click: function(){
      $('html').removeClass('modal-open12');
    }
  });

  $('.modal12').on({
    click: function(event){
      if(event.target == this){
      $('html').removeClass('modal-open12');
    }
    }
  });
  $('.btn13').on({
    click: function(){
      $('html').addClass('modal-open13');
    }
  });

  $('.close-button').on({
    click: function(){
      $('html').removeClass('modal-open13');
    }
  });

  $('.modal13').on({
    click: function(event){
      if(event.target == this){
      $('html').removeClass('modal-open13');
    }
    }
  });
  $('.btn14').on({
    click: function(){
      $('html').addClass('modal-open14');
    }
  });

  $('.close-button').on({
    click: function(){
      $('html').removeClass('modal-open14');
    }
  });

  $('.modal14').on({
    click: function(event){
      if(event.target == this){
      $('html').removeClass('modal-open14');
    }
    }
  });
  $('.btn15').on({
    click: function(){
      $('html').addClass('modal-open15');
    }
  });

  $('.close-button').on({
    click: function(){
      $('html').removeClass('modal-open15');
    }
  });

  $('.modal15').on({
    click: function(event){
      if(event.target == this){
      $('html').removeClass('modal-open15');
    }
    }
  });

});


$(window).scroll(function(){

  var wScroll = $(this).scrollTop();
  var gridOffset = $('.grid').offset().top - ($(window).height() / 1.4);

  if(wScroll > gridOffset){

    $('.grid .box').each(function(i){

      setTimeout(function(){
         $('.grid .box').eq(i).addClass('is-showing')
      }, 150 * (i+1));


    });

  }

  $('.logo-img').css({
    'transform' : 'translate(0px, '+ wScroll /2.5 +'%)'
  })

});

function scrollToElement (selector) {
  $('html, body').animate({
    scrollTop: $(selector).offset().top
  }, 2000);
};

$(document).on('click', 'a.scrollLink', function () {
  scrollToElement($(this).attr('href'));

});
