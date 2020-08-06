/*-----------------footer plus icon toggle-----------------*/
 if ($(window).width() < 576) {
    $(document).ready(function(){
      $('.foot-wrap .title').on('click', function(){
        $(this).next('ul').slideToggle();
        $(this).find('.icon').toggleClass('fa-plus');
      });
    });
  }
if ($(window).width() < 991) {
    $(document).ready(function(){
      $('.navigation-toggler').on('click', function(){
        $(".navigation").next('ul').slideToggle();
      });
    });
  }  


/*-----------------Menu script-----------------*/
(function($){
  $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');

    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-submenu .show').removeClass("show");
    });

    return false;
  });
})(jQuery)



  
  

// $(document).bind("contextmenu",function(e){
//   return false;
//     });
// document.onkeydown = function(e) {
//         if (e.ctrlKey && 
//             (e.keyCode === 67 || 
//              e.keyCode === 86 || 
//              e.keyCode === 85 || 
//              e.keyCode === 117)) {
//             // alert('not allowed');
//             return false;
//         } else {
//             return true;
//         }
// };

// $(document).ready(function() {
//   "use strict";

//   var window_width = $(window).width(),
//     window_height = window.innerHeight,
//     header_height = $(".default-header").height(),
//     header_height_static = $(".site-header.static").outerHeight(),
//     fitscreen = window_height - header_height;

//   $(".fullscreen").css("height", window_height);
//   $(".fitscreen").css("height", fitscreen);

//   -------- Active Sticky Js ----------//
//   $(".default-header").sticky({ topSpacing: 0 });
// });



/*##################################################*/
 

$(document).ready(function(){

/*-----------------owl carousel-----------------*/
    $(".owl-next").html("<i class='fas fa-arrow-right'></i>");
    $(".owl-prev").html("<i class='fas fa-arrow-left'></i>");

/*-----------------faq toggle-----------------*/
    $('.faq-header a').on('click',function(){
      $(this).find('.icon').toggleClass("fa-angle-up");
    });    

  });         
/*-----------------Active link switching-----------------*/
  $(document).ready(function () {
      $('.page-scroll').click(function(e) {
        $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
      });
  });

/*################## Header Scroll Js ################################*/
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $("#header").addClass("header-scrolled");

    } else {
      $("#header").removeClass("header-scrolled");
    }
  });
/*################## Smooth Scroll Js ################################*/
// $('.nav-item a[href^="#"]').on("click", function(e) {
//   e.preventDefault();
//   var target = this.hash;
//   $target = $(target);
//   $("html, body")
//     .stop()
//     .animate(
//       {
//         scrollTop: $target.offset().top 
//       },
//       900,
//       "swing",
//       function() {
//         window.location.hash = target;
//       }
//     );
// });



/*################## On Scroll Top ################################*/
  $(window).scroll(function() {
    if ($(window).scrollTop() > 700) {
        $('.scrollTop').addClass('active');
    }
    else {$('.scrollTop').removeClass('active');}
})

$(".scrollTop").click(function() {
  $('html, body').animate({ scrollTop: 0 }, 'slow');
  return false;
});

/*################## Water Ripple Js Start ################################*/
// $(document).ready(function(){
//   $('.class').ripples({
//     resolution: 512,
//     dropRadius: 5,
//     perturbance: 0.01,
//   });
//   //
//   $('.home_slider1_bg').ripples({
//     resolution: 200,
//     dropRadius: 20,
//     perturbance: 0.04,
//   });

  
//   // Automatic drops
//   setInterval(function() {
//     var $el = $('.class');
//     var x = Math.random() * $el.outerWidth();
//     var y = Math.random() * $el.outerHeight();
//     var dropRadius = 20;
//     var strength = 0.04 + Math.random() * 0.04;

//     $el.ripples('drop', x, y, dropRadius, strength);
//   }, 400);
// });
/*################## Water Ripple Js End ################################*/


/*################## Typewriter js Start ################################*/
// var app = document.getElementById("app");
// var typewriter = new Typewriter(app, {
//   loop: true
// });

// typewriter
//   .typeString("Web Developer")
//   .pauseFor(0)
//   .deleteAll()
//   .typeString("Business Analyst")
//   .pauseFor(0)
//   .deleteAll()
//   .typeString("Web Designer")
//   .pauseFor(0)
//   .deleteAll()
//   .typeString("Content Writer")
//   .pauseFor(0)
//   .deleteAll()
//   .start();
/*################## Typewriter js End ################################*/

/*################## Isotope js Starts ################################*/
   $(window).on("load", function() {
    $(".work-filter ul li").on("click", function() {
      $(".work-filter ul li").removeClass("active");
      $(this).addClass("active");

      var data = $(this).attr("data-filter");
      $workGrid.isotope({
        filter: data
      });
    });

    if (document.getElementById("portfolio")) {
      var $workGrid = $(".work-grid").isotope({
        itemSelector: ".all",
        percentPosition: true,
        masonry: {
          columnWidth: ".all"
        }
      });
    }
  });
/*################## Isotope js Starts ################################*/

/*################## Magnific Popup js Starts ################################*/
  // $(".img-gal").magnificPopup({
  //   type: "image",
  //   gallery: {
  //     enabled: true
  //   }
  // });

  // $(".play-btn").magnificPopup({
  //   type: "iframe",
  //   mainClass: "mfp-bg",
  //   removalDelay: 160,
  //   preloader: false,
  //   fixedContentPos: true
  // });
  /*################## Magnific Popup js End ################################*/



