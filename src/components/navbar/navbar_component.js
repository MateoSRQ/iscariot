'use strict';

define([
      'app/app',
      'text!components/navbar/templates/default.html'
], function (App, template) {
      var View = Marionette.ItemView.extend({
            template: function () {
                  return _.template(template)({
                        //id: item.id
                  })
            }
      });

      return Marionette.Object.extend({
            initialize: function (options) {
                  log.info('NavBar Component: initializing');
                  log.info(options);
                  this.region = options.region;
                  //this.employee = options.employee;
            },
            show: function () {
                  log.info('NavBar Component: show function called');
                  var view = new View({
                        //model: employee
                  });
                  this.region.show(view);
            }
      });
});