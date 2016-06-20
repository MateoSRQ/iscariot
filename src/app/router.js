'use strict';

define(["marionette"], function (Marionette) {
      return Marionette.AppRouter.extend({
            appRoutes: {
                  "": "home",
                  "test": "test"
            },

            //http://192.168.1.41/gepetto/src/index.html#hello/mateo
            routes: {
                  "hello/:username": "helloBuddy"
            },

            helloBuddy: function (buddy) {
                  log.info('Router: hello, ' + buddy);
            }
      });
});


