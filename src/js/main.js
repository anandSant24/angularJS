var myApp = angular.module('myApp', []);

var sampleControler = function($scope){
	$scope.message = "Hello Anand";
};

var getHttpNgServices = function($scope,$http, $interval){
	
	$scope.searchText = 'angular';

	// this function needs to be more genric 
	var onErr = function(error){
		console.log('error occured '+error);
	};

	var getUserDetails = function(response){
		$scope.repos = response.data;
	};

	var onUserComplete = function(response){
		
		$http.get(response.data.repos_url)
			.then(getUserDetails ,onErr);
	};

	$scope.search = function(searchText){
		$http.get('https://api.github.com/users/'+searchText).
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
myApp.controller('getHttpNgServices',getHttpNgServices);