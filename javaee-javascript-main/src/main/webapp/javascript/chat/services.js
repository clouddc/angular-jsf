'use strict';

var todoServices = angular.module('todoServices', ['ngResource']);
todoServices.constant('TODO_RESOURCE_URL', 'http://localhost:8080/javaee-javascript-main/resources/todo/' + principal);

todoServices.factory('ToDo', ['$resource', 'TODO_RESOURCE_URL',
    function($resource, TODO_RESOURCE_URL) {
        return $resource(TODO_RESOURCE_URL, {}, {
            query: {method: 'GET', params: {phoneId: 'phones'}, isArray: true}
        });
    }]);