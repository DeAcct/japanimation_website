$(function () {
  var $slider = $(".slider_handler");
  var slides = $(".slider_handler").children().length;
  var disableWidth = 5;
  $slider.find("a").click(function () {
    $slider.find("li").removeClass("on");
    $(this).parent().addClass("on");
    $slider.find("span").css({
      opacity: 0,
    });
    $(this)
      .parent()
      .siblings()
      .animate(
        {
          //li
          width: disableWidth + "%",
        },
        300
      );
    $(this)
      .parent()
      .animate(
        {
          //li
          width: 100 - disableWidth * (slides - 1) + "%",
        },
        300
      );
    return false;
  });
  $slider
    .find("span")
    .mouseenter(function () {
      var toggleCheck = $(this).parent().parent().hasClass("on");
      if (toggleCheck == false)
        $(this).animate(
          {
            opacity: 0.3,
          },
          100
        );
    })
    .mouseleave(function () {
      $(this).animate(
        {
          opacity: 0,
        },
        100
      );
    });
});
