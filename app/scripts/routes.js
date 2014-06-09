/**
 * Top level routes definition
 */
define(['app'], function (app) {
    'use strict';
    return app.config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {
            $locationProvider.html5Mode(false);
            //            $locationProvider.hashPrefix('!');
            $routeProvider.when('/test', {
                templateUrl: 'views/test.html',
                controller: 'testCtrl'
            }).when('/alert', {
                templateUrl: 'views/test-alert.html',
                controller: 'alertCtrl'
            });


            $routeProvider.when('/404', {
                templateUrl: 'views/errors/404.html'
            });
            $routeProvider.otherwise({
                redirectTo: '/404'
            });
    }]);
});
