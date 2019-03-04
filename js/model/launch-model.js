

$(".second-nav-menu-right ul li").on("mouseover",function(){
  var hover_text=$(this).find("p").text();
  $(".second-nav-menu-left p").text(hover_text);
  event.stopPropagation();
});
$(document).ready(function(){
  $("section.carousel-gallery").css("height",document.documentElement.clientHeight*0.4);
  $("section.carousel-gallery").css("paddingTop",document.documentElement.clientHeight*0.22);
  model_init();
  dropdown_style();

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
function nav_bar_change(){
  $(window).scroll(function(){
    if($(window).scrollTop()>0){
      /*样式变换*/
      console.log($(window).scrollTop());
    }
  });
};

function dropdown_style(){
  $(".dropdown-content").css({"left":"0px","marginTop":"40px"});

}
function model_init(){
  $('select').material_select();
}
