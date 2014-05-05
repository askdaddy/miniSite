/**
 *configure RequireJS
 */
require.config({
    baseUrl: 'scripts',
    paths: {
        angular: '../vendors/angular/angular',
        domReady: '../vendors/requirejs-domready/domReady',
        angularResource: '../vendors/angular-resource/angular-resource',
        angularRoute: '../vendors/angular-route/angular-route'
    },
    shim: {
        // angular does not support AMD out of the box, put it in a shim
        angular: {
            exports: 'angular'
        },
        angularResource: {
            deps: ['angular']
        },
        angularRoute: {
            deps: ['angular']
        }
    },
    map: {
        '*': {
            'css': '../vendors/require-css/css' // or whatever the path to require-css is
        }
    },
    // this is not twitter bootstrap,its sctipts/bootstrap.js
    deps: ['css!../styles/bootstrap.min', 'bootstrap']
});
