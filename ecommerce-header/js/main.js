(function ($) {
  "use strict";

  //  Stick Menu
  var header = $(".sticky__bar");
  var win = $(window);
  win.on("scroll", function () {
    var scroll = win.scrollTop();
    if (scroll < 200) {
      header.removeClass("stick");
    } else {
      header.addClass("stick");
    }
  });

  //Mobile
  function headermobileAside() {
    var navbarTrigger = $(".mobile-aside-button"),
      endTrigger = $(".mobile-aside-close"),
      container = $(".mobile-off-canvas-active"),
      wrapper = $(".main__wrapper");

    wrapper.prepend('<div class="body-overlay"></div>');

    navbarTrigger.on("click", function (e) {
      e.preventDefault();
      container.addClass("inside");
      wrapper.addClass("overlay-active");
    });

    endTrigger.on("click", function () {
      container.removeClass("inside");
      wrapper.removeClass("overlay-active");
    });

    $(".body-overlay").on("click", function () {
      container.removeClass("inside");
      wrapper.removeClass("overlay-active");
    });
  }
  headermobileAside();

  //   Mobile Menu
  var $offCanvasNav = $(".mobile-menu , .sidebar-menu"),
    $offCanvasNavSubMenu = $offCanvasNav.find(".dropdown");

  //Add Toggle Button With Off Canvas Sub Menu
  $offCanvasNavSubMenu
    .parent()
    .prepend('<span class="menu-expand"><i></i></span>');

  //Close Off Canvas Sub Menu
  $offCanvasNavSubMenu.slideUp();

  //Category Sub Menu Toggle
  $offCanvasNav.on("click", "li a, li .menu-expand", function (e) {
    var $this = $(this);
    if (
      $this
        .parent()
        .attr("class")
        .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
      ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
    ) {
      e.preventDefault();
      if ($this.siblings("ul:visible").length) {
        $this.parent("li").removeClass("active");
        $this.siblings("ul").slideUp();
      } else {
        $this.parent("li").addClass("active");
        $this
          .closest("li")
          .siblings("li")
          .removeClass("active")
          .find("li")
          .removeClass("active");
        $this.closest("li").siblings("li").find("ul:visible").slideUp();
        $this.siblings("ul").slideDown();
      }
    }
  });

  //Currency Active
  $(".currency-dropdown-active").on("click", function (e) {
    e.preventDefault();
    $(this).parent().find(".currency-dropdown").slideToggle("medium");
  });

  //Mobile Currency Active
  $(".mobile-language-active").on("click", function (e) {
    e.preventDefault();
    $(".lang-dropdown-active").slideToggle(900);
  });
  $(".mobile-currency-active").on("click", function (e) {
    e.preventDefault();
    $(".curr-dropdown-active").slideToggle(900);
  });
  $(".mobile-account-active").on("click", function (e) {
    e.preventDefault();
    $(".account-dropdown-active").slideToggle(900);
  });

  //Cart Active on Click
  if ($(".cart__wrap").length) {
    var $body = $("body"),
      $cartWrap = $(".cart__wrap"),
      $cartContent = $cartWrap.find(".shopping__cart-content");
    $cartWrap.on("click", ".cart__active", function (e) {
      e.preventDefault();
      var $this = $(this);
      if (!$this.parent().hasClass("show")) {
        $this
          .siblings(".shopping__cart-content")
          .addClass("show")
          .parent()
          .addClass("show");
      } else {
        $this
          .siblings(".shopping__cart-content")
          .removeClass("show")
          .parent()
          .removeClass("show");
      }
    });

    //Close When Click Close Button
    $cartWrap.on("click", ".cart__close", function (e) {
      e.preventDefault();
      var $this = $(this);
      $this
        .closest(".cart__wrap")
        .removeClass("show")
        .find(".shopping__cart-content")
        .removeClass("show");
    });

    //Close When Click Outside
    $body.on("click", function (e) {
      var $target = e.target;
      if (
        !$($target).is(".cart__wrap") &&
        !$($target).parents().is(".cart__wrap") &&
        $cartWrap.hasClass("show")
      ) {
        $cartWrap.removeClass("show");
        $cartContent.removeClass("show");
      }
    });
  }

  //Category Toggle Function
  $(".showcat").on("click", function (e) {
    e.preventDefault();
    $(".hidecat").slideToggle(900);
  });

  //Sidemenu Dropdown
  function sidemenuDropdown() {
    var $this = $(".mobile-category-menu");
    $this.find("nav .cr-dropdown").find("ul").slideUp();
    $this
      .find("nav li.cr-dropdown > a, nav li.cr-sub-dropdown > a")
      .on("click", function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
      });
  }
  sidemenuDropdown();
})(jQuery);
