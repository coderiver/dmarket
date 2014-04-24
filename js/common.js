$(document).ready(function() {

	$("a[rel=fancy_group]").fancybox();

	$("#gallery").smoothDivScroll({
		// autoScrollingMode: "onStart"
		// hotSpotScrolling: false,
		touchScrolling: true,
		visibleHotSpotBackgrounds: "always"
	});
	$('#left,right').hide();

	// $("#left").hover(function() {
	// 	$("#gallery").smoothDivScroll("enable");
	// 	// $("#gallery").smoothDivScroll("startAutoScrolling");
	// 	// $("#gallery").smoothDivScroll("option","autoScrollDirection","left");
	// 	 $("#makeMeScrollable").smoothDivScroll("scrollToElement", "first");
	// }, function() {
	// 	$("#gallery").smoothDivScroll("disable");
	// });

	// $("#right").hover(function() {
	// 	$("#gallery").smoothDivScroll("enable");
	// 	// $("#gallery").smoothDivScroll("startAutoScrolling");
	// 	// $("#gallery").smoothDivScroll("option","autoScrollDirection","right");
	// 	$("#makeMeScrollable").smoothDivScroll("scrollToElement", "last");
	// }, function() {
	// 	$("#gallery").smoothDivScroll("disable");
	// });
	// $("#left").mouseover(function() {
		
	// });

	// $("#right").mouseover(function() {
	// 	$("#gallery").smoothDivScroll("stopAutoScrolling");
	// 	$("#gallery").smoothDivScroll("option","autoScrollDirection","left");
	// 	$("#gallery").smoothDivScroll("startAutoScrolling");
	// });

	// $('.js-prodslider').cycle({
	// 	fx: "carousel",
	// 	// fx:     'scrollHorz',
 //    speed:  1200,
	// 	timeout: 0,
	// 	// log: false,
	// 	// carouselVisible: 1,
	// 	slideActiveClass: "is-active",
	// 	pagerActiveClass: "is-active",
	// 	disabledClass: "is-disabled",
	// 	slideClass: "gallery__product",
	// 	allowWrap: "true",
	// 	// pager: ".newspreview__pager",
	// 	// pagerTemplate: "<span></span>",
	// 	slides: ".gallery__product",
	// 	// prevNextEvent: 'mouseover click',
	// 	next: $(".gallery__next"),
	// 	prev: $(".gallery__prev")
	// });

	// function sliderPrevNext() {
	// 	$('.gallery__prev').hover(function () {
	// 	    intervalVar = setInterval(function(){
	// 	        $('.js-prodslider').cycle('prev');
	// 	    },1200);
	// 	  }, function () {
	// 	    clearInterval(intervalVar);
	// 	});

	// 	$('.gallery__next').hover(function () {
	// 	    intervalVar = setInterval(function(){
	// 	        $('.js-prodslider').cycle('next');
	// 	    },1200);
	// 	  }, function () {
	// 	    clearInterval(intervalVar);
	// 	});

	// } sliderPrevNext();




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

	$('.js-form form').on('submit',function(){
		var el = $(this).find('input, textarea');
		if( !$(el).val() ) {
			$(el).parents().addClass('is-error');
		}
	});

	//click document
	$(document).click(function(event) {
		if($(event.target).parents().index($('.popup')) == -1) {
			$('.popup').removeClass('is-open');
		}
		$('.js-select').removeClass('is-open');
	});


});
