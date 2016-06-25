/*(function(){
*/var myApp = angular.module('myApp', []);

var sampleControler = function($scope){
	$scope.message = "Hello Anand";
};

// you now can use githubService service instead of using $http service 
var getHttpNgServices = function($scope, $interval,githubService){
	
	$scope.searchText = 'angular';

	// this function needs to be more genric 
	var onErr = function(error){
		console.log('error occured '+error);
	};

	var getUserDetails = function(response){
		$scope.repos = response.data;
	};

	var onUserComplete = function(data){
		
		githubService.getRepo(data.repos_url)
			.then(getUserDetails ,onErr);
	};

	$scope.search = function(searchText){
		githubService.getUser(searchText).
		//observe that we are simply providing name of Fns expressions
		then(onUserComplete,onErr);	
	};	

	//this can be a seprate module in itself
		// this function needs to be more genric 
	$scope.counter = 5;

	var decrementCount = function(){
		$scope.counter--;
		if($scope.counter < 1){
			$scope.search($scope.searchText);	
		}
	};

	(function startCounter(){
		//here is the nice 3rd param counter which stops interval
		$interval(decrementCount,1000,$scope.counter);
	})();

};


myApp.controller('sampleControler',sampleControler);
//maintain the array module dependency for the custom services to work
myApp.controller('getHttpNgServices',["$scope", "$interval","githubService",getHttpNgServices]);
