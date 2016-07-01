(function(){
	var myApp = angular.module('myApp');
		// you now can use githubService service instead of using $http service 
		var userController = function($scope, githubService, $routeParams){

		var onUserComplete = function(data){
			$scope.user = data;
			githubService.getRepo($scope.user)
				.then(getUserDetails ,onErr);
		};

		// this function needs to be more genric 
		var onErr = function(error){
			console.log('error occured '+error);
		};

		var getUserDetails = function(response){
			$scope.repos = response.data;
		};

		$scope.searchText = $routeParams.searchText;
		githubService.getUser($scope.searchText).then(onUserComplete, onErr);

	};
			//maintain the array module dependency for the custom services to work
	myApp.controller('userController',["$scope","githubService", "$routeParams",userController]);
})();