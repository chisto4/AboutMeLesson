$(window).scroll(function(e) {
  if($(window).scrollTop()>=700) {
    $('div.up_Button').fadeIn(700);
  } else {
    $('div.up_Button').fadeOut(700);
  }
});

$(document).ready(function() {
  $(".menuToggle").click(function() {
    $(this).toggleClass("active");
    $('nav').slideToggle(300, function(){
      if($(this).css('display') === "none"){
        $(this).removeAttr('style');
      }
    });
  });
});

function scrollOnWriteOption(top) {
  const writeMeSelector = document.querySelector('.autor_info');
  writeMeSelector.scrollIntoView(top);
}

const buttonWriteMe = document.getElementsByClassName('write_Me_Button');

buttonWriteMe.onClick = scrollOnWriteOption();