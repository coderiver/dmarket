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

	$('.popup__close').on('click', function() {
		$(this).parents().removeClass('is-open');
	});

	$('.btn-order').on('click', function() {
		$('.popup').addClass('is-open');
		return false;
	});

	//select
	function select() {
		var el = $('.js-select');
		var el_title = el.children("span");
		var item = el.find('li');
		var input = el.find(".js-select-input");
		var el_text = el.find(".js-select-text");
		var checkbox = el.find(".checkbox");
		var list = el.find('.js-select-drop');
		el_title.click(function(event){
			if ($(this).parent().hasClass('is-open')) {
				$(this).parent().removeClass('is-open');
			}
			else {
				el.removeClass('is-open');
				$(this).parent().addClass('is-open');
			}
			event.stopPropagation();
		});
		checkbox.click(function(event){
			event.stopPropagation();
		});
		item.bind("click",function(){
			$('.js-select-drop li').removeClass("is-selected");
			$(this).addClass("is-selected");
			var text = $(this).text();
			var id = $(this).attr("data-id");
			$(this).parents(".js-select").find(".js-select-text").text(text);
			$(this).parents(".js-select").find(".js-select-input").val(id);
		});
	} select();

	//click document
	$(document).click(function(event) {
		if($(event.target).parents().index($('.popup')) == -1) {
			$('.popup').removeClass('is-open');
		}
		$('.js-select').removeClass('is-open');
	});


});
