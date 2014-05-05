define(['./directives'], function (directives) {
    'use strict';
    directives.directive('loading', ['$rootScope',

        function ($rootScope) {
            return {
                link: function (scope, element, attrs) {
                    element.addClass('hide');

                    $rootScope.$on('$routeChangeStart', function () {
                        element.removeClass('hide');
                    });
                    $rootScope.$on('$routeChangeSuccess', function () {
                        element.addClass('hide');
                    });
                }
            };
        }]);
});
