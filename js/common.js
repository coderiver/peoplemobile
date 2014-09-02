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

	var linkToShow = $('.js-link')
		blockToShow = $('.js-block');

	blockToShow.hide();

	linkToShow.click(function(event) {
		$(this).siblings(blockToShow).slideToggle();
	});

	var pollOption = $('.box__list li');

	pollOption.click(function(event) {
		pollOption.removeClass('is-selected');
		$(this).addClass('is-selected');
	});

	// $('.box_polls').click(function(event) {
	// 	if (!$(event.target).closest('.box__list-small').length) {
			// $('.box_polls').removeClass('is-show-more');
			// $('.box_polls').find('.box__list-small').slideUp();
	// 		$(this).toggleClass('is-show-more');
	// 		$(this).find('.box__list-small').slideToggle();
	// 	};
	// });

	// $('.box__hide').click(function(event) {
	// 	$(this).closest('.box').removeClass('is-show-more');
	// 	$(this).siblings('.box__list-small').slideUp();
	// });


});