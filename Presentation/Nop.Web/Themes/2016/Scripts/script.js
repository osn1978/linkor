$(document).ready(function () {

    $('.bxslider').bxSlider({
        auto: true,
        pause: 4000,
        speed: 800
    });
    $('.bx-slider-two').bxSlider({
        pause: 4000,
        speed: 800,
        maxSlides: 6,
        slideWidth: true,
        slideMargin: 60
    });
    ///////* Hover text: Linkor Wake. Positioning arrows*////////
    var linkorWake = $("#linkorWake"),
            bxPrev = $('.bx-prev'),
            bxNext = $('.bx-next'),
        withDocument = $(window).width();
    if (withDocument > 464)
    {
        linkorWake.mouseover(function () {
            bxPrev.css({ "left": "30px" });
            bxPrev.css({ "z-index": "1" });
            bxNext.css({ "z-index": "1" });
            bxNext.css({ "right": "30px" });
        });
        linkorWake.mouseout(function () {
            bxPrev.css({ "left": "" });
            bxNext.css({ "right": "" });
        });
    }
    //////////////////////////////////////////////////

    /*touch-menu*/
    var touch = $('#touch-menu'),
        menu = $('.top-nav');
    $(touch).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function () {
        var wid = $(window).width();
        if (wid > 935 && menu.is(':hidden'))
        {
            menu.removeAttr('style');
        }
    });
    /*category-menu*/
    var categTouch = $('#category-menu'),
            categMenu = $('ul.nav-hidden');
    $(categTouch).on('click', function (e) {
        e.preventDefault();
        categMenu.slideToggle();
    });
    $(window).resize(function () {
        var widt = $(window).width();
        if (widt > 472)
        {
            categMenu.removeAttr('style');
        }
    });

    ////////////*add class click touchMenu*////////////
    var touchMenu = $('#touch-menu');
    touchMenu.click(function () {
        touchMenu.toggleClass("close-menu");
    });

    ///////////*close item product*/////////////
    var close = $('.close');
    close.click(function () {
        $(this).parent().remove();
    });

    ////////*Working with the basket. Purchase of goods *///////////////
    var minus = $('.minus'),
    plus = $('.plus');

    minus.click(function () {
        var num = $(this).next(),
        integ = parseInt(num.text());
        if (integ > 0)
        {
            integ = integ - 1;
            num.text(integ);
            var priceOneProduct = 350;
            var uu = $(this).parent().find('.price-linkor');
            var tt = integ * priceOneProduct;
            uu.text(tt);
            var sum = $('.sum'),
      count = 0;
            $(".price-linkor").each(function () {
                count += parseInt($(this).text());
            });
            sum.text(count);
            return false;
        }
    });
    plus.click(function () {
        var num = $(this).prev(),
            integ = parseInt(num.text()),
            priceOneProduct = 350,
            priceLinkor = $(this).parent().find('.price-linkor'),
            sum = $('.sum'),
            count = 0;

        if (integ >= 0 && integ < 99)
        {
            integ = integ + 1;
            num.text(integ);
            priceLinkor.text(integ * priceOneProduct);
            $(".price-linkor").each(function () {
                count += parseInt($(this).text());
            });
            sum.text(count);
            return false;
        }

    });

    var sum = $('.sum'),
        count = 0;
    $(".price-linkor").each(function () {
        count += parseInt($(this).text());
    });
    sum.text(count);



});