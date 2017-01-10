app.controller('topics-controller', function($scope, $http, $route, $routeParams, $location) {


	var refresh = function() {
		$http.get('/topicslist').success(function(response){
			$scope.topics = response;
		});

	};

	refresh();
	$scope.addTopic = function(){	
	  var topics = {title: $scope.topic.title, score: 0, agree: 0, disagree: 0, category: $scope.topic.category};
	  $http.post('/topicslist/add', topics).success(function(response){
	  	if (response == 'already_exists'){
	  		swal("Topic Already Exists!","","error");
	  	} else{
	  		swal("Topic Created","","success");
	  		$route.reload();
	  		$location.path('/topic/'+$scope.topic.title+'/'+response._id);
	  	}
	  });

	};
	$scope.incrementAgree = function(id) {
  		$http.get('/topicslist/agree/'+id).success(function(response){
  			var topic = response;
  			$http.put('/topicslist/agree/'+id, topic).success(function(response){
  				refresh();
  			});
		});
	};
	$scope.incrementDisagree = function(id) {
  		$http.get('/topicslist/disagree/'+id).success(function(response){
  			var topic = response;
  			$http.put('/topicslist/disagree/'+id, topic).success(function(response){
  				refresh();
  			});
		});
	};

});