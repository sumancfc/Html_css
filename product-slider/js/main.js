(function ($) {
  "use strict";

  //Product slider active
  $(".product__slider-active").owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    item: 4,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  //Product Quick view Slide
  $(".quickview__slide-active").owlCarousel({
    loop: true,
    navText: [
      "<i class='la la-angle-left'></i>",
      "<i class='la la-angle-right'></i>",
    ],
    margin: 15,
    smartSpeed: 1000,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 3,
        autoplay: true,
        smartSpeed: 300,
      },
      576: {
        items: 3,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".quickview__slide-active a").on("click", function () {
    $(".quickview__slide-active a").removeClass("active");
  });

  // Cart + -
  var CartPlusMinus = $(".cart__plus-minus");
  CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
  CartPlusMinus.append('<div class="inc qtybutton">+</div>');
  $(".qtybutton").on("click", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.text() === "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
    $button.parent().find("input").val(newVal);
  });
})(jQuery);
