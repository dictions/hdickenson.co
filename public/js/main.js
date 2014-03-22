'use strict';

// sitewide scripts
var Sitewide = {

	scrollToDiv : function(div, offset){

		var $div = $(div);
		var topOffset = offset;

		$('html, body').animate({
			scrollTop: $div.offset().top + topOffset
		}, 600, 'easeInOutQuint');

	},

	init: function(){

	}

};

// home page scripts
var HomeTemplate = function(){

	this.masonryContainer = document.querySelector('#portfolio');
	this.$portfolioImages = $('#portfolio img');

};

HomeTemplate.prototype.init = function(){

	var self = this;

	this.initMasonry();

	// see more work link scroll 
	$('#hero-call').click(function(){
		Sitewide.scrollToDiv('#portfolio', -200); // 200 = 12.5rem
		return false;
	});

	// animated postmark handler
	$('#footer-hire-status').hover(function(){
		$('#footer-postmark').toggleClass('animate');
	});

};

HomeTemplate.prototype.initMasonry = function(){

	var self = this;

	var msnry = new Masonry(self.masonryContainer, {
		'gutter': 16,
		'transitionDuration': '0.15s'
	});

	// set up masonry after portfolio images are loaded
	var imageCount = 0;
	this.$portfolioImages.load(function(){
		imageCount++;
		if (imageCount === self.$portfolioImages.length) {
			setTimeout(msnry.layout(),10);
		}
	});

}

// init sitewide and template
$(window).ready(function(){

	var templateName = $('[data-template]').data('template');
	var template;

	if(templateName === 'home'){
		template = new HomeTemplate();
	}

	Sitewide.init();
	template.init();

});

// custom easing for scrollToDiv
jQuery.extend(jQuery.easing, {
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	}
});