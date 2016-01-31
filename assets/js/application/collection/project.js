define([

	'backbone'

	], function(Backbone){

	'use strict';

	var ProjectCollection = Backbone.Collection.extend({
	
		urlRoot: '/projects',
		url: base + 'assets/data/projects.json?ts=' + (new Date()).getTime(),
		comparator: 'position',

	 	initialize: function(options){
	 		this.model = options.model;
	 	}
	});
	
	return ProjectCollection;
});