define([

	'marionette',
	'timelinemax',
	'viewer',
	'application/collection/project',
	'application/model/project',
	'application/view/projects',
	'application/view/project',
	'text!application/template/layout.tpl',
	'text!application/template/project.tpl'
	
], function(Marionette, TimelineMax, Viewer, ProjectCollection, ProjectModel, ProjectsView, ProjectView, LayoutTemplate, ProjectTemplate) {

	'use strict';

	var LayoutView = Marionette.Layout.extend({

		id: 'layout',

		template: _.template(LayoutTemplate),
		
		regions: {
			header: '.header',
			content: '.content',
			footer: '.footer'
		},

		initialize: function() {
			
		},

		onRender: function() {
			this.setup();
		},

		setup: function() {
			var projectModel = new ProjectModel();
			var projectTemplate = _.template(ProjectTemplate);

			var projectCollection = new ProjectCollection({
				'model': ProjectModel
			});

			var projectView = new ProjectView({
				'template': projectTemplate
			});

			var projectsView = new ProjectsView({
				'collection': projectCollection,
				'itemView': ProjectView,
				'template': projectTemplate
			});

			this.content.show(projectsView);

			projectCollection.on('sync', this.run, this);
			projectCollection.fetch({reset: true});
		},

		run: function() {
			this.viewer();
			this.show();
		},

		viewer: function() {
			var safari = /^((?!chrome).)*safari/i.test(navigator.userAgent);

			if(safari) {
				var flip = false;
			} else {
				var flip = true;
			}

			this.viewer = new Viewer({
				element: 'body',
				selector: '.container img.preview',
				classPrefix: 'viewer-',
				userInterface: true,
				resizeContainer: true,
				visualDuration: 0.3,
				resizeDuration: 0.3,
				shiftDelay: 0.3,
				verticalOffset: 60,
				horizontalOffset: 60,
				flip: flip,
				callback: null
			});

			$('.container a.detail').on('click', function(event){event.preventDefault()});
		},

		show: function() {
			if(mobile) {
				$('.detail, .preview').off('click mouseover mouseout');
				$('.detail').on('click', function(event){event.preventDefault()});
				this.fade();
			} else {
				this.animate();
			}
		},

		animate: function(){
			var time = .618;

			var container = '.container';
			var backdrop = '.backdrop, .pattern';
			var sprite = '#loader';
			var visuals = '.detail';
			var text = '.name, .sub, .heading, .dash, .title, .description, .footnote';

			if($(window).width() > 1000) {
				var width = 960;
			} else {
				var width = 490;
			}

			(new TimelineMax()).set(sprite, {
				opacity: 1
			}).set(container, {
				display: 'block',
				y: -120,
				width: '100%',
				opacity: 0
			}).to(sprite, time, {
				opacity: 0,
				onComplete: loader.dispose.bind(loader)
			}).to(container, time, {
				x: 0,
				y: 0,
				width: width,
				opacity: 1,
				onComplete: function(){$(container).removeAttr('style');}
			});

			(new TimelineMax()).set(backdrop, {
				display: 'block',
				opacity: 0
			}).to(backdrop, time, {
				opacity: 1,
				delay: time
			});

			(new TimelineMax()).set(text, {
				x: -10,
				y: -10,
				opacity: 0
			}).staggerTo(text, time, {
				x: 0,
				y: 0,
				opacity: 1,
				delay: time * 1.75
			}, time / 16);

			(new TimelineMax()).set(visuals, {
				opacity: 0,
				rotationX: -1,
				rotationY: 1,
				rotationZ: -1,
			}).staggerTo(visuals, time * 2, {
				opacity: 1,
				rotationX: 0,
				rotationY: 0,
				rotationZ: 0,
				transformPerspective: 300,
				delay: time * 2.25,
				ease: Linear.easeIn
			}, time / 4);
		},

		fade: function(){
			var time = .618;

			var container = '.container';
			var backdrop = '.backdrop, .pattern';
			var sprite = '#loader';
			var visuals = '.project:first-child .detail';
			var text = '.name, .sub, .project:first-child .heading, .project:first-child .dash, .project:first-child .title, .project:first-child .description';

			if($(window).width() > 1000) {
				var width = 960;
			} else {
				var width = 490;
			}

			(new TimelineMax()).set(sprite, {
				opacity: 1
			}).set(container, {
				display: 'block',
				opacity: 0
			}).to(sprite, time, {
				opacity: 0,
				onComplete: loader.dispose.bind(loader)
			}).to(container, time, {
				opacity: 1,
				onComplete: function(){$(container).removeAttr('style');}
			});
		}
	});

	return LayoutView;
});