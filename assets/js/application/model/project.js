define([

	'backbone'

], function(Backbone) {

	'use strict';

	var ProjectModel = Backbone.Model.extend({
		
		urlRoot				: '',

		detailDirectory		: './assets/images/detail/',
		previewDirectory	: './assets/images/preview/',

		defaults: {
			'id'			: 0,
			'published'		: false,
			'position'		: 0,
			'client'		: '',
			'project'		: '',
			'information'	: {},
			'visuals'		: []
	 	},

	 	initialize: function() {
	 		
	 	}
	});

	return ProjectModel;
});