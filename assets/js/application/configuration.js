requirejs.config({

	baseUrl:			'assets/js',
	urlArgs: 			'ts=' + (new Date()).getTime(),
	
	paths: {
		text:			'library/requirejs-text/text',
		jquery:			'library/jquery/dist/jquery',
		underscore: 	'library/underscore/underscore',
		backbone:		'library/backbone/backbone',
		marionette:		'library/backbone.marionette/lib/backbone.marionette',
		tweenmax:		'library/greensock/src/uncompressed/TweenMax',
		timelinemax:	'library/greensock/src/uncompressed/TimelineMax',
		sprite:			'custom/sprite',
		viewer:			'custom/viewer'
	},
	
	shim: {
		'jquery': {
			exports: '$'
		},
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		'marionette': {
			deps: ['jquery', 'underscore', 'backbone'],
			exports: 'Marionette'
		},
		'tweenmax' : {
			exports: 'TweenMax'
		},
		'timelinemax' : {
			deps: ['tweenmax'],
			exports: 'TimelineMax'
		},
		'sprite': {
			exports: 'Sprite'
		},
		'viewer': {
			deps: ['jquery', 'tweenmax'],
			exports: 'Viewer'
		}
	}
});

require([

	'jquery'

	], function($) {

	'use strict';

	window.debug = false;
	window.base = $('base').attr('href');
	window.mobile = /iphone|ipad|ipod|android|windows *phone/i.test(navigator.userAgent); // Very rudimentary test

	window.log = function() {
		if(window.debug) {
			console.log.apply(console, arguments);
		}
	}.bind(window);
		
	$(function() {
		require(['application/setup'], function(Setup){
			var setup = new Setup();
			window.application = setup.getApp();
			window.application.start();
		}.bind(this));
	});
});