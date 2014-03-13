'use strict';

// sitewide scripts
var Sitewide = {

	init: function(){

	}

};

// home page scripts
var HomeTemplate = function(){

	this.masonryContainer = document.querySelector('#portfolio');

};

HomeTemplate.prototype.init = function(){

	var self = this;

	// set up masonry 
	var msnry = new Masonry(self.masonryContainer, {
		'gutter': 16,
		'transitionDuration': '0.25s'
	});

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