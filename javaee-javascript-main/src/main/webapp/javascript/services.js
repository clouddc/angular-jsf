'use strict';

var todoServices = angular.module('todoServices', ['ngResource']);

todoServices.factory('ToDo', ['$resource',
    function($resource) {
        return $resource('todo/reza', {}, {
            query: {method: 'GET', params: {phoneId: 'phones'}, isArray: true}
        });
    }]);