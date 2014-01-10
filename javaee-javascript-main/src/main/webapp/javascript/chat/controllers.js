'use strict';

var chatControllers = angular.module('chatControllers', []);

chatControllers.controller('ChatController', ['$scope',
    function($scope) {
        $scope.user = principal;
        $scope.messages = [];
        $scope.newMessages = false;
        $scope.newMessage = '';

        var websocket = new WebSocket('wss://localhost:8181/javaee-javascript-main/chat');

        websocket.onmessage = function(message) {
            $scope.newMessages = true;
            $scope.messages.push(JSON.parse(message.data));
            $scope.$apply();
        };

        $scope.send = function() {
            websocket.send(JSON.stringify({user: principal, message: $scope.newMessage}));
            $scope.newMessage = '';
        };
    }]);