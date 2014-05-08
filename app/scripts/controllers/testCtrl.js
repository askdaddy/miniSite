/**
 * My first test controller
 */
define(['./controllers', 'json'], function (controllers, JSON) {
    'use strict';
    controllers.controller('testCtrl', ['$scope', '$location',

        function ($scope, $location) {
            $scope.greeting = {
                text: JSON.stringify({
                    "Hello": "seven",
                    "Good-bye": 456
                }, ["Hello", "Good-bye"], "\t")
            };

            $scope.jumpAlert = function () {
                $location.path('/alert');
            };

        }]);
});
