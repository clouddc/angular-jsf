'use strict';

var todoControllers = angular.module('todoControllers', []);

todoControllers.controller('ToDoController', ['$scope', 'ToDo',
    function($scope, ToDo) {
        $scope.items = ToDo.query();
        $scope.addToDoItem = function(event) {
            if (event.keyCode === 13) { // enter key
                
            }
        };
        $scope.activateItemEdit = function(event) {
            alert(event + '!!! first function call!');
        };
        $scope.deactivateItemEdit = function(event) {
            alert(event + '!!! first function call!');
        };
    }]);