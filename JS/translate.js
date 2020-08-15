	// Language Translate
function translate(lang) {
var $frame = $('.goog-te-menu-frame:first');

$frame.contents().find('.goog-te-menu2-item span.text:contains(' + lang + ')').get(0).click();
return false;
 }


  $(".dropdown-menu.language_dropdown").on("click", "span", function() {
	translate($(this).attr("id"));
  });

 	$('.footer-language').on('click', '.lang', function() {
		translate($(this).attr('id'));
		$(this).closest('.footer-language').find('.lang').removeClass('active');
		$(this).addClass('active');
});
function activelangs() {
	if($('html').attr('lang')!='en') { 
		var htmlAttrb = $('html').attr('lang'); 
		$('.footer-language').find('.lang').removeClass('active');
		$('.'+htmlAttrb).addClass('active');
	}
}	
$('body').on('click', function(){
	$('.othr-lang-menu').slideUp('fast');
});
$('.othr-lang-title').on('click', function(e){
	e.stopPropagation();
	$(this).toggleClass('active');
	$('.othr-lang-menu').slideToggle('fast');
})