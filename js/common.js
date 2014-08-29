head.ready(function() {

	var menuButton   = $('.nav-btn'),
		menu         = $('.sidenav'),
		visibleClass = 'is-visible';

	var voteButton   = $('.js-voteButton'),
		voteCategoty = $('.js-voteCategory');

	menuButton.click(function(event) {
		menu.addClass(visibleClass);
	});

	$(document).click(function(event) {
		if ( !$(event.target).closest(menu).length &&
			 !$(event.target).closest(menuButton).length ) {
				menu.removeClass(visibleClass);
		};
	});

	voteButton.click(function(event) {
		voteCategoty.slideToggle();
	});

	$('.js-slick').slick({
		arrow: true,
		dots: true,
		infinite: true,
		slide: '.js-slick-slide',
		cssEase: 'ease',
		useCSS: true
	});

});