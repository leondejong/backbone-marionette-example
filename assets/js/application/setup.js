define([

	'marionette',
	'application/router/router',
	'application/view/layout'
	
], function(Marionette, Router) {

	'use strict';

	function Setup(options) {
		this.initialize(options);
	}

	Setup.prototype = {

		constructor: Setup,

		initialize: function(options) {
			//this.setup(options);
		},
		
		setup: function(options) {
			this.application = new Marionette.Application();

			this.application.addRegions({
				body: 'body',
				application: '.application'
			});

			this.application.module('showcase', function(Showcase, Application) {
				Showcase.display = function(region, view) {
					region.show(view);
				};
			});
			
			this.application.addInitializer(function(options) {
				this.router = new Router();
				this.router.start();
			}.bind(this));
		},

		getApp: function(options) {
			if(!this.application) {
				this.setup();
			}

			return this.application;
		},

		startApp: function(options) {
			this.getApp().start(options);
		}
	}
		
	return Setup;
});	