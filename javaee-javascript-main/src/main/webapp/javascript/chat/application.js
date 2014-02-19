'use strict'; // Enforce correctness similar to jslint.

// See http://docs.angularjs.org/api/angular.module for docs on 
// angular.module()

var chatApplication = angular.module('chatApplication', ['chatControllers',
    'chatServices', 'chatDirectives']);

// Module chatApplication depends on modules chatControllers, chatServices
// and chatDirectives
