'use strict';

define([
      'marionette',
      'app/router',
      'app/controller',
      'text!app/templates/app.html',
      'bootstrap',
      'css!css_bootstrap'

], function (Marionette, Router, Controller, template) {
      var App = new Backbone.Marionette.Application({});

      App.LayoutView = Backbone.Marionette.LayoutView.extend({
            el: '#app_region',
            template: _.template(template),
            regions: {
                  'main_region': '#main_region'
            }
      });

      App.on('start', function () {
            log.info('App.on.start');
            var self = this;
            this.layout = new App.LayoutView();
            this.layout.render();
            $('#spinner-body').fadeOut(250);

            //       require([
            //             'components/navbar/navbar_component'
            //       ], function (navbar_component) {
            //             var navbar_component = new navbar_component({
            //                   region: App.layout.getRegion('main_region'),
            //                   model: new Backbone.Model({id: 'navbar', class: 'navbar_component'})
            //             });
            //             console.log(App.layout.getRegion('main_region'));
            //             navbar_component.show();
            //       })
            // });

            var controller = new Controller();
            var router = new Router({
                  controller: controller
            });
            if (Backbone.history) {
                  Backbone.history.start();
                  log.info('Backbone.history.start()');
            }
      });

      /* Callbacks */
      // App.vent.on('OpenlayersComponent.init', function (self) {
      //       log.info('App.vent.on OpenlayersComponent.init');
      //       log.info(self);
      // });

      return App;
});