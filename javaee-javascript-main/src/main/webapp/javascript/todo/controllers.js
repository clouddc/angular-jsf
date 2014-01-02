'use strict';

var todoControllers = angular.module('todoControllers', []);

todoControllers.controller('ToDoController', ['$scope', 'ToDo',
    function($scope, ToDo) {
        $scope.newToDoDescription = '';
        $scope.itemToEdit = null;

        $scope.items = [
            {id: 1, description: 'Take out trash', completed: false},
            {id: 2, description: 'Do laundry', completed: true}
        ];

        // $scope.items = ToDo.query();
        $scope.addItem = function() {
            alert("Adding item: " + $scope.newToDoDescription);
            $scope.newToDoDescription = '';
        };

        $scope.editItem = function(item) {
            $scope.itemToEdit = item;
            $scope.itemBackup = angular.extend({}, item);
        };

        $scope.commitEditItem = function(item) {
            $scope.itemToEdit = null;
        };

        $scope.revertEditing = function(item) {
            $scope.items[$scope.items.indexOf(item)] = $scope.itemBackup;
            $scope.itemToEdit = null; // Call commit instead?
        };

        $scope.removeItem = function(item) {
            alert("Removing item: " + item);
        };
    }]);