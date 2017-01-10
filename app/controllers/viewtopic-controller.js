app.controller('viewtopic-controller', function($scope, $http, $route, $routeParams) {

        $http.get('/viewtopic/'+$routeParams.id).success(function(response){

        	$scope.topicData = response;
        	console.log($scope.topicData);
		});


});