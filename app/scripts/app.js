define(['angular', 'angularResource', 'angularRoute', 'controllers/index', 'directives/index', 'filters/index', 'services/index'], function (ng) {
    'use strict';
    return ng.module('app', ['ngRoute', 'app.services', 'app.controllers', 'app.filters', 'app.directives']);
});
