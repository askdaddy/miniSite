define(['angular', 'angularResource', 'angularRoute', 'angularBooststrap', 'angularAnimate', 'controllers/index', 'directives/index', 'filters/index', 'services/index'], function (ng) {
    'use strict';
    return ng.module('app', ['ngAnimate', 'ui.bootstrap', 'ngRoute', 'app.services', 'app.controllers', 'app.filters', 'app.directives']);
});
