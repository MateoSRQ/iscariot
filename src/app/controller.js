'use strict';

define(["marionette"], function (Marionette) {
      return Marionette.Controller.extend({
            initialize: function (options) {
                  //TODO: code to initialize
            },
            start: function () {
                  //TODO: code to start
            },

            home: function () {
                  log.info('Router: home');
            },

            test: function () {
                  log.info('Router: test');
            }
      });
});