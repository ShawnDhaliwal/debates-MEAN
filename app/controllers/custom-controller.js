var app = angular.module('myApp', []);

app.controller('signup-controller', function($scope) {
});

app.controller('login-controller', function($scope) {
});


app.controller('topics-controller', function($scope) {
	$scope.topics = [
	  {title: 'Header 1Header 1Header 1Header 1Header 1Header 1Header 1Header 1Header 1Header 1Header 1Header 1', agree: 3, disagree: 3, score: 0, category: 'Politics'},
	  {title: 'HeaderHeaderHeaderHeaderHeaderHeaderHeaderHeaderHeaderHeaderHeaderHeader', score: 2, category: 'Sports'},
	  {title: 'Header 3', score: 15, category: 'News'},
	  {title: 'Header 4', score: 9, category: 'Science'},
	  {title: 'Header 5', score: 4, category: 'Equality'}
	];
	$scope.addTopic = function(){
	  $scope.topics.push({title: $scope.topic.title, score: 0, category: $scope.topic.category});
	  swal("Topic Created","","success"); 
	};
	$scope.incrementAgree = function(topic) {
  		topic.score += 1;
  		topic.agree += 1;
	};
	$scope.incrementDisagree = function(topic) {
  		topic.score -= 1;
  		topic.disagree += 1;
	};
});
