$(document).ready(function(){

    $('.back-top').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 500);
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('.back-top').slideDown(500);
        }else{
            $('.back-top').slideUp(500);
        }
    });

});