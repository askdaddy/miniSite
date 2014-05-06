define(['angular', 'angularResource', 'angularRoute', 'angularBooststrap', 'controllers/index', 'directives/index', 'filters/index', 'services/index'], function (ng) {
    'use strict';
    return ng.module('app', ['ui.bootstrap', 'ngRoute', 'app.services', 'app.controllers', 'app.filters', 'app.directives']);
});
