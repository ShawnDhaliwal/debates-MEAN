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



