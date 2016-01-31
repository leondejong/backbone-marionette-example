define([

	'marionette',
	'tweenmax'
	
], function(Marionette, TweenMax) {

	'use strict';

	var ProjectView = Marionette.ItemView.extend({
		
		tagName: 'div',
		className: 'project',

		events: {
			'mouseover .detail'	: 'highlight',
			'mouseout .detail'	: 'highlight'
		},

		initialize: function(options) {
			this.template = options.template;
		},

		render: function() {
			this.json = this.model.toJSON();
			
			if(this.model.get('published')) {
				this.$el.html(this.template(this.json));
			}

			return this;
		},

		highlight: function(event) {
			event.preventDefault();

			var time = .3;
			var opacity = .7;

			var detail = $(event.currentTarget);
			var preview = detail.find('.preview');

			if(event.type === 'mouseover') {
				var opacity = opacity;
			} else if(event.type === 'mouseout') {
				var opacity = 1;
			}

			TweenMax.to(preview, time, {
				opacity: opacity
			});
		}
	});

	return ProjectView;
});