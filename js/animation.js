$(document).ready(function() {

	$('a[href^="#"]').click(function(){
	var the_id = $(this).attr("href");
	if (the_id === '#') {
		return;
	}
	$('html, body').animate({
		scrollTop:$(the_id).offset().top
	}, 'slow');
	return false;
});
	
	$('.nav_mobile').click(function(){
		$(".nav_mobile_drop").toggleClass("display");
	})

	$(".close").click(function () {
		$(".nav_mobile_drop").toggleClass("display");
	})

	$('.nav_lang').click(function(){
		$(".nav_lang_drop").toggleClass("display");
	})


	var $animation_elements = $('.scroll_anim');
	var $window = $(window);

	function check_if_in_view() {
		var window_height = $window.height();
		var window_top_position = $window.scrollTop();
		var window_bottom_position = (window_top_position + window_height);

		$.each($animation_elements, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
			  $element.addClass('animate');
			} else {
			  $element.removeClass('animate');
			}
		});
	}

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');


	particlesJS.load('pepin','pepin.json'); 


});





