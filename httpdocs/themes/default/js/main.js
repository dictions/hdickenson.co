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
	this.$portfolioImages = $('#portfolio a');

};

HomeTemplate.prototype.init = function(){

	var self = this;

	this.initMasonry();

	// portfolio images handler
	this.$portfolioImages.click(function(){
		self.putPortfolioViewer($(this).attr('href'));
		return false;
	});

	// see more work link handler 
	$('#hero-call').click(function(){
		Sitewide.scrollToDiv('#portfolio', -200); // 200 = 12.5rem
		return false;
	});

	// animated postmark handler
	$('#footer-hire-status').hover(function(){
		$('#footer-postmark').toggleClass('animate');
	});

	// show video background
	this.showVideoBg(document.getElementById('bg-video'));

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

};

HomeTemplate.prototype.putPortfolioViewer = function(link){

	var self = this;

	$(this.masonryContainer).after(
		'<div class="portfolio-image-viewer">' +
			'<a href="/" class="exit"><i class="icon white">close</i></a>' +
		'</div>'
	);

	$.get(link,function(){
		$('.portfolio-image-viewer').css('background-image', 'url(' + link + ')');
		setTimeout(function(){
			$('.portfolio-image-viewer').addClass('show');
		},100);
	});

	$('body').addClass('no-scroll');

	$('.portfolio-image-viewer .exit').click(function(){
		self.removePortfolioViewer();
		return false;
	});

};

HomeTemplate.prototype.removePortfolioViewer = function(link){

	$('body').removeClass('no-scroll');

	// remove viewer after hidden class is removed
	$('.portfolio-image-viewer').removeClass('show').on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',function(){
		$('.portfolio-image-viewer').remove();
	});

};

HomeTemplate.prototype.showVideoBg = function(video){

	video.addEventListener('loadeddata', function() {
		console.log('loaded');
		$('.bg-video-container').addClass('show');
	}, false);

};



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