// Courtesy of yckart via http://stackoverflow.com/questions/15191058/css-rotation-cross-browser-with-jquery-animate
$.fn.animateRotate = function(start, angle, duration, easing, complete) {
	return this.each(function() {
		var $elem = $(this);
		$({deg: start}).animate({deg: angle}, {
			duration: duration,
			easing: easing,
			step: function(now) {
				$elem.css({
					transform: 'rotate(' + now + 'deg)'
				});
			},
			complete: complete || $.noop
		});
	});
};

$('button.navbar-toggle').click(function() {
	if(!$(this).hasClass('active')) {
		$('img.brand-icon').animateRotate(0, 90, 300, 'swing', function() {
			$('button.navbar-toggle').addClass('active');
		});
	} else {
		$('img.brand-icon').animateRotate(90, 180, 300, 'swing', function() {
			$('button.navbar-toggle').removeClass('active');
		});
	}
});


$(document).ready(function () {
    var url = window.location;
    $('ul.nav a[href="'+ url +'"]').parent().addClass('active');
    $('ul.nav a').filter(function() {
         return this.href == url;
    }).parent().addClass('active');
});