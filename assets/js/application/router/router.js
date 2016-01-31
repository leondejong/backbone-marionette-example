define([

	'marionette',
	'application/controller/main'

], function(Marionette, MainController) {

	'use strict';

	var Router = Marionette.AppRouter.extend({

		controller: new MainController(),

		appRoutes: {
			'': 'index'
		},

		initialize: function() {
			
		},

		start: function() {
			var root = base
				.replace(document.location.protocol, '')
				.replace(document.location.hostname, '')
				.replace('//', '');
			Backbone.history.start({pushState: 'pushState' in window.history, root: root});
		}
	});

	return Router;
});