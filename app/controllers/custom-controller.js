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
	$scope.incrementAgree = function(id) {
  		$http.get('/topicslist/agree/'+id).success(function(response){
  			var topic = response;
  			console.log(topic.title);
  			$http.put('/topicslist/agree/'+id, topic).success(function(response){
  				refresh();
  			});
		});
	};
	$scope.incrementDisagree = function(id) {
  		$http.get('/topicslist/disagree/'+id).success(function(response){
  			var topic = response;
  			console.log(topic.title);
  			$http.put('/topicslist/disagree/'+id, topic).success(function(response){
  				refresh();
  			});
		});
	};
});
