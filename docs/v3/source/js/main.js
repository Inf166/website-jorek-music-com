$(document).ready(function(){
    $(".hamburger").click(function openmenu(){
        $(this).toggleClass("is-active");
        $(".menu").toggle();
        $("blur").toggle();
        $(".menu").toggleClass('is-open', 500);
    });
    $("blur").click(function closemenu(){
        $(".hamburger").removeClass("is-active");
        $(".menu").toggle();
        $("blur").toggle();
        $(".menu").removeClass('is-open', 500);
    });
  });