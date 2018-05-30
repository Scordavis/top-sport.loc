// $(function() {

	// Custom JS

// insert slider img src to background-image



// var arr = $('.gallery_item');
// arr.each(function( i, el) {
// var bgSrc = $(this).find('.js-image').attr('src');
//  $(this).find('.js-background').css('background-image', 'url("' + bgSrc + '")');
// });

// $(this).find(".gallery__item")(function(){
// 	var bgSrc = $('.gallery__item > .js-background > .js-image').attr('src');
// 	 $('.gallery__item > .js-background').css('background-image', 'url("' + bgSrc + '")');
// });



// var bgSrc = $('.js-image').attr('src');
// $('.js-background').css('background-image', 'url("' + bgSrc + '")');




// });

$( document ).ready(function() {

// slick
$('.gallery__wrapper').slick({
	dots: true,
	arrows: true
});

$(".js-image").each(function(){
  var obj = $(this).attr("src");
  $(this).wrap("<div class='gallery__img-wrapper js-background' style='background:url(" + obj + "); '></div>")
})


});
