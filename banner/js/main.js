(function ($) {
  "use strict";
  $(".banner__slider-active").owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    item: 3,
    margin: 15,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 3,
      },
      992: {
        items: 3,
      },
      1080: {
        items: 3,
      },
    },
  });
})(jQuery);
