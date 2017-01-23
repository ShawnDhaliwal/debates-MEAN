var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider

	.when("/:id", {
		templateUrl : "viewtopic.html", controller: 'viewtopic-controller'
	})
	.when("/", {
		templateUrl : "topiclist.html", controller: 'topics-controller'
	})
	.when("/pages/:pageNumber", {
		templateUrl : "topiclist.html", controller: 'topics-controller'
	})    
	.otherwise({
		templateUrl : "404.html"
	});
});

app.filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
});

