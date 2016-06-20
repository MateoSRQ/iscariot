'use strict';

requirejs.config({
//By default load any module IDs from js/lib
//baseUrl: '.',
//baseUrl: 'bower_components',
      waitSeconds : 60,
      paths: {
            underscore: '../node_modules/underscore/underscore',
            jquery: '../node_modules/jquery/dist/jquery',
            polyglot: '../node_modules/node-polyglot/build/polyglot',
            backbone: '../node_modules/backbone/backbone',
            marionette: '../node_modules/backbone.marionette/lib/backbone.marionette',
            bootstrap: '../node_modules/bootstrap/dist/js/bootstrap',
            css_bootstrap: '../node_modules/bootstrap/dist/css/bootstrap',
            text: '../node_modules/requirejs-text/text',
            css: '../node_modules/require-css/css',
            app: 'app'
//css_main: 'css',
//css_bootstrap: 'bower_components/bootstrap/dist/css',
      },
      shim: {
            underscore: {
                  exports: '_'
            },
            backbone: {
                  deps: ['underscore', 'jquery']
            },
            marionette: {
                  deps: ['underscore'],
                  exports: 'Marionette'
            },
            bootstrap: {
                  deps: ['jquery']
            }   ,
            polyglot: {
                  exports: 'Polyglot'
            }
      }
});

requirejs.onResourceLoad = function (context, map) {
      log.info('[' + map.name + '] resource loaded');
};

log.setLevel(0);

