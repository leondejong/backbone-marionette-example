define([

	'marionette'

], function(Marionette) {

	'use strict';

	var ProjectsView = Marionette.CollectionView.extend({
		
		tagName: 'div',
		className: 'projects',

		itemViewOptions: {
			template: null
		},

		initialize: function(options) {
			this.itemViewOptions.template = this.options.template;
		}
	});

	return ProjectsView;
});