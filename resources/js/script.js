$(document).ready(function () {
    $(window).scroll(function () {
        var x = $(window).scrollTop();
        if (x >= 64) {
            $('nav').addClass('nav-fixed');
            $('.image').addClass('fade');
            $('.image').removeClass('show');
            $('.brand').css('color', 'black');
        } else {
            $('nav').removeClass('nav-fixed');
            $('.image').removeClass('fade');
            $('.image').addClass('show');
            $('.brand').css('color', 'white');
        }
    });
    $('.disabled').click(function () {
        M.toast({ html: 'Sorry, link was disabled!' });
    });
});