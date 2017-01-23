app.controller('topics-controller', function($scope, $http, $route, $routeParams, $location, $anchorScroll) {


	var refresh = function() {
		if(!$routeParams.pageNumber){
			$scope.nextPage = 2;
			$scope.firstIndex = 0;
			$scope.lastIndex = 11;
		} else {
			$scope.nextPage = $routeParams.pageNumber;
			$scope.nextPage++;
			$scope.prevPage = $routeParams.pageNumber;
			$scope.prevPage--;
			$scope.firstIndex = 0;
			for (i = 0; i < $routeParams.pageNumber-1; i++) { 
				$scope.firstIndex += 10;
			}
			$scope.lastIndex = $scope.firstIndex+11;

		}
		$http.get('/topicslist').success(function(response){
			$scope.topics = response;
			$scope.availableSearchParams = $scope.topics;

			$scope.totalTopics = $scope.topics.length;
			console.log($scope.totalTopics);
			$scope.nextPageLimit = Math.ceil($scope.totalTopics/10);
			console.log($scope.nextPageLimit);
		});

	};

	refresh();

	$scope.reloadPage = function() {
		$anchorScroll();
	};

	$scope.addTopic = function(){	
		var topics = {title: $scope.topic.title, score: 0, agree: 0, disagree: 0, category: $scope.topic.category, date: $scope.date = new Date()};
		$http.post('/topicslist/add', topics).success(function(response){
			if (response == 'already_exists'){
				swal("Topic Already Exists!","","error");
			} else{
				$location.path('/'+response._id);
				refresh();
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