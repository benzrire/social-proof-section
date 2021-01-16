$(function () {
  $(window).on("resize orientationchange",function (e) {
    var rate = $(".rate");

    rate.each(function (i) {
      var star = $(this).find(".star"),
          starNumber = star.data("star");
      
      if ($(window).outerWidth() > 767) {
        $(this).css("margin-left", (i * 50) + "px");
      }

      star.empty();
      for (var j = 0; j < starNumber; j++) {
        star.append($(document.createElement("img")).attr("src", "./images/icon-star.svg").attr("alt", ""));
      }
    });

    var review = $(".review");

    review.each(function (i) {
      if ($(window).outerWidth() > 767) {
        $(this).css("margin-top", (i * 15) + "px");
      }
    });
  });

  $(window).trigger("resize");
});