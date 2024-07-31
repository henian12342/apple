$(document).ready(function(){
  AOS.init();

    // a태그 기본기능 제거
    $("a").click(function(e){
      e.preventDefault();
    })

    // mainVisualBanner fade slide
    setInterval(function(){
      let now_img, next_img;
      now_img = $("#slide ul li").eq(0);
      next_img = $("#slide ul li").eq(1);
      next_img.addClass("active").css("opacity",0).animate({
        opacity:1
      },600,function(){
        $("#slide ul").append(now_img);
        now_img.removeClass("active");
      });
    },2000);

    //tab menu
    $(".promotionItem .tapSection dl dt").click(function(){
      $(".promotionItem .tapSection dl dt").removeClass("on");
      $(this).addClass("on");
      
      $(".promotionItem .tapSection dl dd").addClass("hidden");
      $(this).next().removeClass("hidden");
    });
    
  // top/bottom scroll btn
  $("#scrollBtn .top").on("click",function(){
    $('html, body').animate({
    scrollTop : 0
    },400)
    return false;
    });

  $("#scrollBtn .bottom").on("click",function(){
    $('html, body').animate({
    scrollTop : $(document).height()
    },400)
    return false;
    });

    // 스크롤한 값에 따라 top버튼 활성화&비활성화
    $(window).scroll(function(){
      var sch = $(document).scrollTop();        
        if(sch > 200) {
          $("#scrollBtn").css({"z-index":"50","opacity":"1"});
        } else {
          $("#scrollBtn").css({"z-index":"-1","opacity":"0"});
        }
    });

        // 스크롤 시 헤더 배경색 활성화
        $(window).scroll(function(){
          var sch2 = $(document).scrollTop();        
            if(sch2 > 100) {
              $("header").css("background","rgb(0, 0, 0)");
            } else {
              $("header").css("background","rgb(0, 0, 0,.0)");
            }
        });

});

