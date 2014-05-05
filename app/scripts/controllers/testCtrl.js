/**
 * My first test controller
 */
define(['./controllers'], function (controllers) {
    'use strict';
    controllers.controller('testCtrl', ['$scope',

        function ($scope) {
            console.log($scope);
            $scope.greeting = {
                text: 'Hello seven...'
            };
        }]);
});
