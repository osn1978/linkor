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

    var calcTotal = function () {
        var sum = 0;
        $(".price-linkor").each(function () {
            sum += parseInt($(this).text().replace('$', '').replace(',', ''));
        });
        $('.sum').text('$' + sum);
    }

   
    $('.close').click(function () {
        $(this).parent().hide();
        $(this).next().prop('checked', true);
        calcTotal();
    });

    var setPrice = function (ctrl, quantity) {
        var priceContainer = ctrl.nextAll('.price-product:first');
        var priceCtrl = priceContainer.find('.price-linkor');
        var priceOneItem = parseInt(priceContainer.find('.price-one-item').text().replace('$', '').replace(',', ''));

        priceCtrl.text('$' + parseInt(priceOneItem * quantity));

        ctrl.nextAll('.qty-input:first').val(quantity);
    }

    ////////*Working with the basket. Purchase of goods *///////////////
    var minus = $('.minus');
    var plus = $('.plus');

    minus.click(function () {
        var qty = $(this).next();
        var quantity = parseInt(qty.text());
        if (quantity > 0)
        {
            quantity--;
            qty.text(quantity);

            setPrice($(this), quantity);
            return false;
        }
    });

    plus.click(function () {
        var qty = $(this).prev();
        var quantity = parseInt(qty.text());

        if (quantity > 0)
        {
            quantity++;
            qty.text(quantity);

            setPrice($(this), quantity);
            return false;
        }
    });

    calcTotal();
});