(function ($) {
  "use strict";
  /* Slider active */
  $(".slider__area-active").owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    navText: [
      '<i class="la la-angle-up"></i>',
      '<i class="la la-angle-down"></i>',
    ],
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    dotsData: true,
    item: 1,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
})(jQuery);
