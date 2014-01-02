'use strict';

var chatControllers = angular.module('chatControllers', []);

chatControllers.controller('ChatController', ['$scope', 'ToDo',
    function($scope, ToDo) {
        $scope.newMessage = '';

        $scope.messages = [
            {user: 'reza', message: 'Anyone home?', timestamp: '01/01/2014 10:00:00 AM EST'},
            {user: 'nicole', message: 'Doing laundry...', timestamp: '01/01/2014 10:01:00 AM EST'},
            {user: 'reza', message: 'Anyone home?', timestamp: '01/01/2014 10:00:00 AM EST'},
            {user: 'nicole', message: 'Doing laundry...', timestamp: '01/01/2014 10:01:00 AM EST'},
            {user: 'reza', message: 'Anyone home?', timestamp: '01/01/2014 10:00:00 AM EST'},
            {user: 'nicole', message: 'Doing laundry...', timestamp: '01/01/2014 10:01:00 AM EST'},
            {user: 'reza', message: 'Anyone home?', timestamp: '01/01/2014 10:00:00 AM EST'},
            {user: 'nicole', message: 'Doing laundry...', timestamp: '01/01/2014 10:01:00 AM EST'},
            {user: 'reza', message: 'Anyone home?', timestamp: '01/01/2014 10:00:00 AM EST'},
            {user: 'nicole', message: 'Doing laundry...', timestamp: '01/01/2014 10:01:00 AM EST'},
            {user: 'reza', message: 'Anyone home?', timestamp: '01/01/2014 10:00:00 AM EST'},
            {user: 'nicole', message: 'Doing laundry...', timestamp: '01/01/2014 10:01:00 AM EST'},
            {user: 'reza', message: 'Anyone home?', timestamp: '01/01/2014 10:00:00 AM EST'},
            {user: 'nicole', message: 'Doing laundry...', timestamp: '01/01/2014 10:01:00 AM EST'},
            {user: 'reza', message: 'Anyone home?', timestamp: '01/01/2014 10:00:00 AM EST'},
            {user: 'nicole', message: 'Doing laundry...', timestamp: '01/01/2014 10:01:00 AM EST'},
            {user: 'reza', message: 'Anyone home?', timestamp: '01/01/2014 10:00:00 AM EST'},
            {user: 'nicole', message: 'Doing laundry...', timestamp: '01/01/2014 10:01:00 AM EST'}
        ];

        $scope.send = function() {
            alert("Sending message: " + $scope.newMessage);
            $scope.newMessage = '';
        };
    }]);