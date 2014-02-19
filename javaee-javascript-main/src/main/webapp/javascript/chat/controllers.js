'use strict';

var chatControllers = angular.module('chatControllers', []);

// Chat is defined in services.js.  It acts as a remote proxy to the 
// WebSocket endpoint.

// The controller is responsible for updating the UI when it gets
// a message from the service, and updating the service when it gets 
// a message from the UI.

chatControllers.controller('ChatController', ['$scope', 'Chat',
    function($scope, Chat) {
        $scope.user = principal;
        $scope.messages = [];
        $scope.newMessage = '';

        // setListener is defined on Chat in services.js
        Chat.setListener(function(message) {
            $scope.messages.push(message); // All JavaScript arrays have
                                           // push() defined.
            $scope.$apply(); // Because this listener is invoked outside
                             // of the UI thread, we must manually call
                             // apply.
        });

        $scope.send = function() {
            Chat.send(principal, $scope.newMessage);
            $scope.newMessage = '';
        };
    }]);
