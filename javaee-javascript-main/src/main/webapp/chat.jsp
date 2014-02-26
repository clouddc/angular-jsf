<!DOCTYPE html>
<html lang="en" ng-app="chatApplication">
    <head>
        <title>Chat</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">

        <!-- We import bootstrap, but we are not explicitly 
             using any of their CSS classes. -->

        <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css">
        <link rel="stylesheet" href="css/chat/application.css">
        
        <!-- We import jQuery only to use its "animate" effect. See the
             usage of the auto-scroll directive below. -->
        
        <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>

        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.6/angular.min.js"></script>

        <!-- This is the key for connecting Java EE basic
             authentication to the AngularJS UI -->

        <script type="text/javascript">

            var principal = '${pageContext.request.userPrincipal.name}';
        </script>
        <script src="javascript/chat/controllers.js"></script>
        <script src="javascript/chat/services.js"></script>
        <script src="javascript/chat/directives.js"></script>
        <script src="javascript/chat/application.js"></script>
    </head>
    <body ng-controller="ChatController">
        <div id="chat-panel">
            <label class="chat-label">Welcome to the Chat, {{user}}</label>

            <!-- AngularJS convention for directives.  In JavaScript
                     they are defined in camelCase, and in HTML they are
                     converted to any case separated by hyphens.  In
                     this example autoScroll.-->

            <div class="chat-box" auto-scroll="messages.length">
                <table class="message-list">
                    <tr class="mesage-panel" ng-repeat="message in messages">
                        <td class="timestamp-column">{{message.timestamp}}</td>
                        <td class="user-column">{{message.user}}</td>
                        <td class="message-column">{{message.message}}</td>
                    </tr>
                </table>
            </div>
            <span class="message-count-label">
                
                <!-- ng-pluralize is used to show the string "message" if
                    the count is exactly one, "messages" otherwise. -->
                
                <strong>{{messages.length}}</strong> <ng-pluralize count="messages.length" when="{ one: 'message', other: 'messages' }"></ng-pluralize> in chat
            </span>
            <form ng-submit="send()"> <!-- This causes ChatController.send() to be invoked -->
<!-- There is no built-in "postback" mechanism in angular -->

                <input class="textbox" placeholder="Hello there!"
                       ng-model="newMessage" autofocus required>
                <!-- binding to ChatController.newMessage -->
            </form>
        </div>
</html>
