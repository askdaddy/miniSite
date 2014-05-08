/**
 * Configure RequireJS
 */
require.config({
    baseUrl: 'scripts',
    paths: {
        angular: '../vendors/angular/angular',
        domReady: '../vendors/requirejs-domready/domReady',
        angularResource: '../vendors/angular-resource/angular-resource',
        angularRoute: '../vendors/angular-route/angular-route',
        angularBooststrap: '../vendors/angular-bootstrap/ui-bootstrap-tpls',
        angularAnimate: '../vendors/angular-animate/angular-animate.min',

        tiwtterCSS: '../vendors/bootstrap-css/css/bootstrap',
        json: '../vendors/json3/lib/json3.min'
    },
    shim: {
        // Angular does not support AMD out of the box, put it in a shim
        angular: {
            exports: 'angular'
        },
        angularResource: {
            deps: ['angular']
        },
        angularRoute: {
            deps: ['angular']
        },
        angularBooststrap: {
            deps: ['angular', 'css!tiwtterCSS']
        },
        angularAnimate: {
            deps: ['angular']
        }
    },
    map: {
        '*': {
            // The path to require-css is. [Plugin for requirejs to load css sheet]
            'css': '../vendors/require-css/css'
        }
    },
    // This is NOT twitter's bootstrap library,it's sctipts/bootstrap.js
    deps: ['bootstrap']
});
