
/*-----------------Menu script-----------------*/
(function(){
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
})

/*-----------------Sticky Navbar-----------------*/
  $(document).ready(function () {
      // Custom function which toggles between sticky class (is-sticky)
      var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
          var stickyHeight = sticky.outerHeight();
          var stickyTop = stickyWrapper.offset().top;
          if (scrollElement.scrollTop() >= stickyTop) {
              stickyWrapper.height(stickyHeight);
              sticky.addClass("is-sticky");
          }
          else {
              sticky.removeClass("is-sticky");
              stickyWrapper.height('auto');
          }
      };

      // Find all data-toggle="sticky-onscroll" elements
      $('[data-toggle="sticky-onscroll"]').each(function () {
          var sticky = $(this);
          var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
          sticky.before(stickyWrapper);
          sticky.addClass('sticky');

          // Scroll & resize events
          $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
              stickyToggle(sticky, stickyWrapper, $(this));
          });

          // On page load
          stickyToggle(sticky, stickyWrapper, $(window));
      });
  });

/*-----------------langauge Converter-----------------*/
$('.language_converter .language-toggle').click(function(){
  $(this).siblings('.language_dropdown').toggle();
});

$(document).click(function(){
  $('.language_dropdown').hide();
})

$('.language-toggle').click(function(e){
  e.stopPropagation();
})

$(".language_dropdown li a").click(function(){
  var selText = $(this).text();
  var img = $(this).parent().find("i").attr("class"); 
  $(this).parents('.dropdown2').find('.language-toggle').html('<i class="'+img+'"></i>'+selText+' <span class="caret"></span>');
  $(this).closest('.language_dropdown').hide();
});
function translate(lang) {
var $frame = $('.goog-te-menu-frame:first');

$frame.contents().find('.goog-te-menu2-item span.text:contains(' + lang + ')').get(0).click();
return false;
 }
$(".language_dropdown").on("click", "a", function() {
  translate($(this).attr("id"));
});

/*-----------------On SCroll Top-----------------*/
  $(window).scroll(function() {
    if ($(window).scrollTop() > 700) {
        $('.scrollTop, .floating').addClass('active');
    }
    else {$('.scrollTop, .floating').removeClass('active');}
})

$(".scrollTop").click(function() {
  $('html, body').animate({ scrollTop: 0 }, 'slow');
  return false;
});



/*-----------------footer plus icon toggle-----------------*/
 if ($(window).width() < 768) {
    $(document).ready(function(){
      $('.footer .title').on('click', function(){
        $(this).next('ul').slideToggle();
        $(this).find('.icon').toggleClass('fa-plus')
      });
    });
  }
  
  