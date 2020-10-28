$(document).ready(function () {
  $("#search").click(function () {
    $(".menu__item").addClass("hide__item");
    $(".search__form").addClass("active");
    $(".close").addClass("active");
    $("#search").hide();
  });

  $(".close").click(function () {
    $(".menu__item").removeClass("hide__item");
    $(".search__form").removeClass("active");
    $(".close").removeClass("active");
    $("#search").show();
  });
});
