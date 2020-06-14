$(document).ready(function(){
      $(".hamburger-toggle").on("click", function(){
        if ($(".menu-wrapper").hasClass("_open_menu")) {
          _close_menu();
        }
        else
          _open_menu();
       });
      
      function _open_menu()
      {
        $(".menu-wrapper").addClass("_open_menu");
        $(".menu-wrapper").removeClass("_close_menu_icon");
      }
      
      function _close_menu()
      {
        $(".menu-wrapper").removeClass("_open_menu");

      }

    });     


$(document).bind("contextmenu",function(e){
  return false;
    });
document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 67 || 
             e.keyCode === 86 || 
             e.keyCode === 85 || 
             e.keyCode === 117)) {
            // alert('not allowed');
            return false;
        } else {
            return true;
        }
};


/*##################################################*/
 

$(document).ready(function(){

/*-----------------owl carousel-----------------*/
    $(".owl-next").html("<i class='fas fa-arrow-right'></i>");
    $(".owl-prev").html("<i class='fas fa-arrow-left'></i>");

/*-----------------faq toggle-----------------*/
    $('.faq-header a').on('click',function(){
      $(this).find('.icon').toggleClass('fa-plus');
    });    

  });         

/*################## Header Scroll Js ################################*/
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
    } else {
      $("#header").removeClass("header-scrolled");
    }
  });
/*################## Smooth Scroll Js ################################*/
$('.menu li a[href^="#"]').on("click", function(e) {
  e.preventDefault();
  var target = this.hash;
  $target = $(target);
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $target.offset().top 
      },
      900,
      "swing",
      function() {
        window.location.hash = target;
      }
    );
});
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

