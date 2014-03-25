$(document).ready(function() {

	$("a[rel=fancy_group]").fancybox();

	$('.js-prodslider').cycle({
		fx: "carousel",
		timeout: 0,
		log: false,
		// carouselVisible: 1,
		slideActiveClass: "is-active",
		pagerActiveClass: "is-active",
		disabledClass: "is-disabled",
		slideClass: "gallery__product",
		allowWrap: "true",
		// pager: ".newspreview__pager",
		// pagerTemplate: "<span></span>",
		slides: ".gallery__product",
		next: ".gallery__next",
		prev: ".gallery__prev"
	});

	$(".js-price").click(function (){
		var page = $(this).attr("href");
		$('html, body').animate({
			scrollTop: $(page).offset().top
		}, 500);
		return false;
	});


});
