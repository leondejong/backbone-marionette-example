define([

	'marionette',
	'application/view/layout'
	
], function(Marionette, Layout) {

	'use strict';

	function Maincontroller(options) {
		this.initialize(options);
	}

	Maincontroller.prototype = {

		constructor: Maincontroller,

		initialize: function(options) {
			this.setup(options);
		},
		
		setup: function(options) {
			this.layout = new Layout();
		},
		
		index: function() {
			window.application.showcase.display(window.application.application, this.layout);
		},
	}
		
	return Maincontroller;
});