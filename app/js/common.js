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

		// fixed navbar
		// jQuery(function(f){
		// 	var element = f('#js-fixed-navbar');
		// 	f(window).scroll(function(){
		// 		element['fade'+ (f(this).scrollTop() > 600 ? 'In': 'Out')](500);
		// 	});
		// });

	// masked input
	$(function () {
	  $.mask.definitions['~'] = "[+-]";
	  //$("#date").mask("99/99/9999",{completed:function(){alert("completed!");}});
	  //$("#phone").mask("(999) 999-9999");
	  //$("#phoneExt").mask("(999) 999-9999? x99999");
	  $(".masked-input").mask("8(999)-999-99-99", {
	      placeholder: " "
	  });
	  //$("#tin").mask("99-9999999");
	  //$("#ssn").mask("999-99-9999");
	  //$("#product").mask("a*-999-a999", { placeholder: " " });
	  //$("#eyescript").mask("~9.99 ~9.99 999");
	  //$("#po").mask("PO: aaa-999-***");
	  //$("#pct").mask("99%");
	  //$("input").blur(function() {
	  //    $("#info").html("Unmasked value: " + $(this).mask());
	  //}).dblclick(function() {
	  //    $(this).unmask();
	  //});
	});


	// form switcher
	$('button[data-src="#form-callback"]').on('click', function() {
	  var metrika = $(this).data('fmetrika');
	  var header = $(this).data('fhead');
	  var description = $(this).data('fdescript');
	  var info = $(this).data('finfo');
	  $('.js-form-button').attr('onsubmit', metrika);
	  $('.js-form-heading').text(header);
	  $('.js-form-description').text(description);
	  $('.js-form [name=form_subject]').val(info);
	});

	$('a[data-src="#form-callback"]').on('click', function() {
	  var metrika = $(this).data('fmetrika');
	  var header = $(this).data('fhead');
	  var info = $(this).data('finfo');
	  $('.popup-callback').attr('onsubmit', metrika);
	  $('.js-form-heading').text(header);
	  $('.popup-callback [name=form_subject]').val(info);
	});

// form thanks

	//E-mail Ajax Send
		$("form").submit(function() { //Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "js/mail.php", //Change
				data: th.serialize()
			}).done(function() {
				$('.form-open__attention').addClass('d-none');
				$('.form-open__attention--v').addClass('d-none');
				$('.form-open__message').removeClass('d-none');
				$('.form-open__attention--success').removeClass('d-none');
				$('.form-open__thanks').addClass('active');
				setTimeout(function() {
					// Done Functions
					th.trigger("reset");
					$.fancybox.close();
					$('.form-open__attention').removeClass('d-none');
					$('.form-open__attention--v').removeClass('d-none');
					$('.form-open__attention--success').addClass('d-none');
					$('.form-open__thanks').removeClass('active');
				}, 5000);
			});
			return false;
		});


});
