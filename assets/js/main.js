$(function () {
    "use strict";

    // vars
    var scroll = $('.scroll-up'),
        fixed_nav = $('.navigation'),
        clearfix = $('.banner');

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 640) {
            scroll.fadeIn(300);
        } else {
            scroll.fadeOut(300);
        }
    });
    scroll.click(function () {
        $('html ,body').animate({
            scrollTop: 0
        }, 800);
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 60) {
            fixed_nav.addClass("fixed-nav").fadeIn(300);
        } else {
            fixed_nav.removeClass("fixed-nav");

        }
    });

    var $randomnbr = $('.nbr'),
        $timer = 30,
        $it, $data = 0,
        index, change, letters = ["o", "b", "e", "d", "t", "s", "a", "g", "a", "n", "e"];

    $randomnbr.each(function () {
        change = Math.round(Math.random() * 100);
        $(this).attr('data-change', change);

    });

    function random() {
        return Math.round(Math.random() * 9);
    };

    function select() {
        return Math.round(Math.random() * $randomnbr.length + 1);
    };

    function value() {
        $('.nbr:nth-child(' + select() + ')').html('' + random() + '');
        $('.nbr:nth-child(' + select() + ')').attr('data-member', $data);
        $data++;

        $randomnbr.each(function () {
            if (parseInt($(this).attr('data-member')) > parseInt($(this).attr('data-change'))) {
                index = $('.ltr').index(this);
                $(this).html(letters[index]);
                $(this).removeClass('nbr');
            }

        });

    };

    $it = setInterval(value, $timer);




});
