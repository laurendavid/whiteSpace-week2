$(function() {
	// FULL WIDTH MAIN NAV
	$('nav a, a').smoothScroll({
		offset: -10,
		speed: 1000
	});

	// HAMBURGER NAV FUNCTIONALITY
	$('.hamburgerIcon').on('click', function (e) {
	    e.preventDefault();
	    $('.mainNav').fadeIn(500).show();
		$('.fa-times-circle').on('click', function (e) {
		    e.preventDefault();
		    $('.mainNav').fadeOut(500).hide();
		});
		$('.mainNav a').on('click', function () {
		    $('.mainNav').fadeOut(500).hide();
		});	
	});
	
});	