var app = angular.module('myApp', []);

app.controller('signup-controller', function($scope) {
});

app.controller('login-controller', function($scope) {
});

app.controller('topics-controller', function($scope) {
	$scope.topics = [
	  {title: 'Header 1', score: 5, category: 'Politics'},
	  {title: 'Header 2', score: 2, category: 'Sports'},
	  {title: 'Header 3', score: 15, category: 'News'},
	  {title: 'Header 4', score: 9, category: 'Science'},
	  {title: 'Header 5', score: 4, category: 'Equality'}
	];
	$scope.addTopic = function(){
	  $scope.topics.push({title: $scope.topic.title, score: 0, category: $scope.topic.category});
	  swal("Topic Created","","success"); 
	};
});
