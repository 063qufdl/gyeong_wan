
 $(function(){
    $("#show").slick({
        autoplay:true,
        infinite:true,
        autoplaySpeed:2000,
        slidesToShow:1,
        slidesToScroll:1
    });

    $(".container").slick({
        autoplay:true,
        infinite:true,
        autoplaySpeed:1000,
        slidesToShow:1,
        slidesToScroll:1
    });

            /*메뉴*/
            $("#hamburger-menu").on("click",function(){
                $("#menu-container").animate({marginLeft:"100%"}, 300);
            
               });
            
               $( ".cross" ).click(function() {
                $("#menu-container").animate({marginLeft:"0px"}, 300);
            });
            
                 $("#menu-container>.menu>li>a").click(function(){
                 if($(this).next().is(":visible"))
                  {
                   $(this).next().stop().slideUp(500);
                   $(this).children("img").attr("src","img/arrow-down.png");
                  }else{
                    $(".submenu").stop().slideUp(500);
            $("#menu-container>.menu>li>a").children("img").attr("src","img/arrow-down.png"); 
                $(this).next().stop().slideDown(500);
                $(this).find("img").attr("src","img/arrow-up.png");        
                  }
            
                 });
            

/*테블릿*/
$("#t-show").slick({
    autoplay:true,
    infinite:true,
    autoplaySpeed:2000,
    slidesToShow:1,
    slidesToScroll:1
});

$(".t-container").slick({
    autoplay:true,
    infinite:true,
    autoplaySpeed:1000,
    slidesToShow:1,
    slidesToScroll:1
});

$("#t-hamburger-menu").on("click",function(){
    $("#t-menu-container").animate({marginLeft:"100%"}, 300);

   });

   $( ".cross" ).click(function() {
    $("#t-menu-container").animate({marginLeft:"0px"}, 300);
});

     $("#t-menu-container>.menu>li>a").click(function(){
     if($(this).next().is(":visible"))
      {
       $(this).next().stop().slideUp(500);
       $(this).children("img").attr("src","img/arrow-down.png");
      }else{
        $(".submenu").stop().slideUp(500);
$("#t-menu-container>.menu>li>a").children("img").attr("src","img/arrow-down.png"); 
    $(this).next().stop().slideDown(500);
    $(this).find("img").attr("src","img/arrow-up.png");        
      }

     });

// pc
$("#p-show").slick({
    autoplay:true,
    infinite:true,
    autoplaySpeed:1000,
    slidesToShow:1,
    slidesToScroll:1
});

/*메뉴*/
// $(".p-submenu>li>a").next().hide();
// $(".p-submenu>li>a").click(function(){
//   if($(this).next().is(":visible")){
//   $(".p-submenu>li>a").next().stop().slideUp(500);
//   }else{
//   $(".p-submenu>li>a").next().stop().slideUp(500);
//   $(this).next().stop().slideDown(500);
//   }	
// });


    // 마우스 over 시
   // $('.dept a').mouseenter(function() {
   // $('.p-inner_menu').show();

        // // 마우스  leave 시
  //  gnb.mouseleave(function() {
  //      $('.inner_menu').hide();

  //  });

  //  });
  
$("#gnb .dept1").on("click",function(){
    // $(".inner_menu").css('display','block')
    $(".inner_menu").slideDown(10);
    $(".p-inner_menu").show();
   });
$('.p-inner_menu').mouseleave(function(){
    $('.inner_menu').hide();
    $('.p-inner_menu').css('display','none')

})











});