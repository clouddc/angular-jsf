'use strict';

var todoServices = angular.module('todoServices', ['ngResource']);

todoServices.factory('ToDo', ['$resource',
    function($resource) {
        return $resource(
                'https://localhost:8181/javaee-javascript-main/resources/todo/:userId/:itemId',
                {userId: principal, itemId: '@id'}, {'update': {method: 'PUT'}});
               // @id is defined by the REST service on the server side.
               // there is no @id, then it is silently ignored.
    }]);
