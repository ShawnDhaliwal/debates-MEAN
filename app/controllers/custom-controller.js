var app = angular.module('myApp', []);

app.controller('signup-controller', function($scope) {
});

app.controller('login-controller', function($scope) {
});

app.controller('topics-controller', function($scope, $http) {
	var refresh = function() {
		$http.get('/topicslist').success(function(response){
			console.log("I got the data");
			$scope.topics = response;
		});
	};
	refresh();

	$scope.addTopic = function(){	
	  $scope.topics = [{title: $scope.topic.title, score: 0, agree: 0, disagree: 0, category: $scope.topic.category}];
	  $http.post('/topicslist', $scope.topics).success(function(response){
	  	console.log(response);

	  });
	  swal("Topic Created","","success");
	  refresh();
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
