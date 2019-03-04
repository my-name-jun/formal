$(".second-nav-menu-right ul li").on("mouseover", function() {
  var hover_text = $(this).find("p").text();
  $(".second-nav-menu-left p").text(hover_text);
  event.stopPropagation();
});
$(document).ready(function() {
  carousel_style();
  dropdown_style();
  model_init();

  $(document).on('mousemove', function(e) { //显示鼠标所在页面的坐标
    if ($(document).scrollTop() > 400) {
      if (e.clientY <= 110) {
        $(".header-scroll").addClass("header-translate");
      } else {
        if ($(".header-scroll").hasClass("header-translate")) {
          if (e.clientY > 384) {
            $(".header-scroll").removeClass("header-translate");
          }
        }
      }
    } else {
      $(".header-scroll").removeClass("header-translate");
    }
  });


});



/*nav-bar  js-function*/
function nav_bar_change() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
      /*样式变换*/
      console.log($(window).scrollTop());
    }
  });
};
/*carousel样式*/
function carousel_style() {
  $('.carousel.carousel-slider').css({
    "height": document.documentElement.clientHeight * 0.85
  });
  $(".carousel-item > h2").css("font-size", "45px");
  $(".carousel-item > p").css("font-size", "40px");

  /*左右按钮*/

  $('.carousel-slider-right').on("click", function() {
    $('.carousel.carousel-slider').carousel('next');
  });

  $('.carousel-slider-left').on("click", function() {
    $('.carousel.carousel-slider').carousel('prev');
  });
};

function dropdown_style() {
  $(".dropdown-content").css({
    "left": "0px",
    "marginTop": "40px"
  });

};

function model_init() {
  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });
  $('select').material_select();
}
