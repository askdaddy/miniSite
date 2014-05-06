/**
 * My first test controller
 */
define(['./controllers'], function (controllers) {
    'use strict';
    controllers.controller('testCtrl', ['$scope',

        function ($scope) {
            $scope.greeting = {
                text: 'Hello seven...'
            };
        }]);
});
