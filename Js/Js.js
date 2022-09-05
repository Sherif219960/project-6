$(document).ready(function () {

    // navbar toggler
    $('.navbar-toggler').on('click', function () {
        $('nav .one').toggleClass('top');
        $('nav .tow').toggleClass('hidden');
        $('nav .three').toggleClass('bottom');
    });

    // creation mixer

    var mixer = mixitup('.gallary');


    // venobox 
    new VenoBox({
        selector: '.venobox'
    });

    // scrolling page
    $('nav li a').on('click', function () {

        // add class active and remove class form siblings element

        $(this).addClass('active').parent().siblings().find('a').removeClass('active');

        $('html,body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 80
        });
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 500) {
            $('.up').fadeIn(1000);
        } else {
            $('.up').fadeOut(1000);
        }
    });
    $('.up').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        });
    });

});
