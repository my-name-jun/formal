
/*four-square*/


    $(function() {

        var $teaBox = $('.index-tec-box');
        var $teaBox2 = $('.index-tec-box2');
        var $names = new Array("李仲麟", "邓春晖", "岑有文", "蔡沂", "周小明", "王素丽", "胡赟", "林煜东", "邓一星", "郑馥丹",
            "袁俐萍", "秦映波", "余小华", "肖皇培", "吴丽镐", "卢珍", "阳平华", "罗世庄", "詹涌强", "杨柱学", "李成炼", "韦婷"
        );
        var index = 0;
        for(var i = 1; i < 23; ++i) {
            var $div = null;
            var $divs = null;
            if(i == 1) {
                $div = $('<div class="index-tec-box-abs" style="z-index:' + (23 - i) + ';display:block;" ></div>');
            } else {
                $div = $('<div class="index-tec-box-abs" style="z-index:' + (23 - i) + '" ></div>');
            }
            var img = $('<img src="img/teacher-img/tec' + i + '.jpg" />');
            var texts = $('<div class="index-tec-box-text" style="z-index:25;">' + $names[i - 1] + '</div>')
            var left = $('<div class="index-tec-box-left" style="z-index:26; right: 44px;" onselectstart="return false">&lt;</div>');
            var right = $('<div class="index-tec-box-right" style="z-index:26;" onselectstart="return false">&gt;</div>');
            var href = $('<a href="#" class="index-tec-box-href"><div class="index-tec-box-click1">点击</div><div class="index-tec-box-click2">查看</div></a>')
            $div.append(texts);
            $div.append(left);
            $div.append(right);
            $div.append(img);
            $div.append(href);
            $teaBox2.append($div);
        }
        for(var i = 1; i < 23; ++i) {
            var $div = null;
            var $divs = null;
            if(i == 1) {
                $div = $('<div class="index-tec-box-abs" style="z-index:' + (23 - i) + ';display:block;" ></div>');
            } else {
                $div = $('<div class="index-tec-box-abs" style="z-index:' + (23 - i) + '" ></div>');
            }
            var img = $('<img src="img/teacher-img/tec' + i + '.jpg" />');
            var texts = $('<div class="index-tec-box-text" style="z-index:25;">' + $names[i - 1] + '</div>')
            var left = $('<div class="index-tec-box-left" style="z-index:26; right: 44px;" onselectstart="return false">&lt;</div>');
            var right = $('<div class="index-tec-box-right" style="z-index:26;" onselectstart="return false">&gt;</div>');
            var href = $('<a href="#" class="index-tec-box-href"><div class="index-tec-box-click1">点击</div><div class="index-tec-box-click2">查看</div></a>')
            $div.append(texts);
            $div.append(left);
            $div.append(right);
            $div.append(img);
            $div.append(href);
            $teaBox.append($div);
        }

        var $imgAbs = $('.index-tec-box .index-tec-box-abs');
        var $imgAbs1 = $('.index-tec-box2 .index-tec-box-abs');
        var $left = $('.index-tec-box .index-tec-box-left');
        var $right = $('.index-tec-box .index-tec-box-right');
        var $left1 = $('.index-tec-box2 .index-tec-box-left');
        var $right1 = $('.index-tec-box2 .index-tec-box-right');
        var $href = $('.index-tec-box-href');
        var clickTime = new Date();
        var hoverTime = new Date();
        var imgTime = setInterval(function() {
            clickFun(1, 1);
            clickFun(1, 2);
        }, 1700);
        $teaBox.mouseover(function() {
            clearInterval(imgTime);

        });
        $teaBox.mouseout(function() {
            imgTime = setInterval(function() {
                clickFun(1, 1);
                clickFun(1, 2);
            }, 1700);
        });
        $left.on('click', function() {
            clickFun(2, 1);
        });

        $right.on('click', function() {
            clickFun(1, 1);
        });
        $left1.on('click', function() {
            clickFun(2, 2);
        });

        $right1.on('click', function() {
            clickFun(1, 2);
        });
        $imgAbs.children('img').mouseover(function() {
            if(new Date() - hoverTime > 80) {
                hoverTime = new Date();
                $(this).stop(true, false).css({
                    "transform": "scale(1.1)"
                });
                $(this).siblings('a').stop(true, false).css({
                    "top": 0,
                    "transition": "all 0.35s"
                });
            }
        });
        $imgAbs.children('a').mouseleave(function() {
            if(new Date() - hoverTime > 80) {
                hoverTime = new Date();
                $(this).siblings('img').stop(true, false).css({
                    "transform": "scale(1)"
                });
                $(this).stop(true, false).css({
                    "top": "-586px",
                    "transition": "all 0.35s"
                });
            }
        });
        $imgAbs1.children('img').mouseover(function() {
            if(new Date() - hoverTime > 80) {
                hoverTime = new Date();
                $(this).stop(true, false).css({
                    "transform": "scale(1.1)"
                });
                $(this).siblings('a').stop(true, false).css({
                    "top": 0,
                    "transition": "all 0.35s"
                });
            }
        });
        $imgAbs1.children('a').mouseleave(function() {
            if(new Date() - hoverTime > 80) {
                hoverTime = new Date();
                $(this).siblings('img').stop(true, false).css({
                    "transform": "scale(1)"
                });
                $(this).stop(true, false).css({
                    "top": "-586px",
                    "transition": "all 0.35s"
                });
            }
        });

        function clickFun(obj, imgN) {
            if(new Date() - clickTime > 1000) {
                clickTime = new Date();
                if(obj == 1) {
                    index++;
                    if(index > $names.length - 1) {
                        index = 0;
                    }
                } else {
                    index--;
                    if(index < 0) {
                        index = $names.length - 1;
                    }
                }
                if(imgN == 1) {
                    $imgAbs.eq(index).stop(true, false).fadeIn(500).siblings().stop(true, false).fadeOut(500);
                    $imgAbs.each(function(index) {
                        $(this).children('a').css({
                            "top": "-586px",
                            "transition": 0
                        });
                    });
                } else {
                    $imgAbs1.eq(index).stop(true, false).fadeIn(500).siblings().stop(true, false).fadeOut(500);
                    $imgAbs1.each(function(index) {
                        $(this).children('a').css({
                            "top": "-586px",
                            "transition": 0
                        });
                    });
                }
            }
        }
    });



    /*highlight*/
    //checks if element it is called on is visible (only checks horizontally
    (function($) {
    var $window = $(window);

    $.fn.isVisible = function(){
      var $this = $(this),
        Left = $this.offset().left,
        visibleWidth = $window .width();

      return Left < visibleWidth;
    }
    })(jQuery);

    (function($){
    var list = $('.portfolio-items'),
        showVisibleItems = function(){
        list.children('.item:not(.falldown)').each(function(el, i){
            var $this = $(this);
            if($this.isVisible()){
              $this.addClass('falldown');
            }
          });
        };

    //initially show all visible items before any scroll starts
    showVisibleItems();

    //then on scroll check for visible items and show them
    list.scroll(function(){
      showVisibleItems();
    });

    //image hover pan effect
    list.on('mousemove','img', function(ev){
        var $this = $(this),
            posX = ev.pageX,
            posY = ev.pageY,
            data = $this.data('cache');
      //cache necessary variables
          if(!data){
            data = {};
            data.marginTop = - parseInt($this.css('top')),
            data.marginLeft = - parseInt($this.css('left')),
            data.parent = $this.parent('.view'),
            $this.data('cache', data);
          }

      var originX = data.parent.offset().left,
          originY =  data.parent.offset().top;

         //move image
         $this.css({
            'left': -( posX - originX ) / data.marginLeft,
            'top' : -( posY - originY ) / data.marginTop
         });
    });


    list.on('mouseleave','.item', function(e){
      $(this).find('img').css({
        'left': '0',
        'top' : '0'
      });
    });

    list.mousewheel(function(event, delta) {

        this.scrollLeft -= (delta * 60);

        event.preventDefault();

     });
    })(jQuery);
    /*
    Thanks a lot Fabrice Weinberg for helping me organize and oprimize the  JS code :)


    Copyright © 2013 Sara Soueidan

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


    */
