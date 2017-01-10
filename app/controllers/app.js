var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider

    .when("/topic/:title/:id", {
        templateUrl : "viewtopic.html", controller: 'viewtopic-controller'
    })
    .otherwise({
        templateUrl : "topiclist.html", controller: 'topics-controller'
    });
});







