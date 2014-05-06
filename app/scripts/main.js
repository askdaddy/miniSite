/**
 *configure RequireJS
 */
require.config({
    baseUrl: 'scripts',
    paths: {
        angular: '../vendors/angular/angular',
        domReady: '../vendors/requirejs-domready/domReady',
        angularResource: '../vendors/angular-resource/angular-resource',
        angularRoute: '../vendors/angular-route/angular-route',
        angularBooststrap: '../vendors/angular-bootstrap/ui-bootstrap-tpls',
        tiwtterCSS: '../vendors/bootstrap-css/css/bootstrap'
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
        },
        angularBooststrap: {
            deps: ['angular', 'css!tiwtterCSS']
        }
    },
    map: {
        '*': {
            'css': '../vendors/require-css/css' // the path to require-css is
        }
    },
    // this is not twitter bootstrap,its sctipts/bootstrap.js
    deps: ['bootstrap']
});
