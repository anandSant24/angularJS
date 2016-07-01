(function(){
 var myApp = angular.module('myApp');


// you now can use mainCtrl service instead of using $http service 
var mainCtrl = function($scope, $interval,$location){

	var countInterval = null;
	var startCounter = function(){
		//here is the nice 3rd param counter which stops interval
		countInterval = $interval(decrementCount,1000,$scope.counter);
	};

	//this can be a seprate module in itself
		// this function needs to be more genric 

	var decrementCount = function(){
		$scope.counter -= 1;
		if($scope.counter < 1){
			$scope.search($scope.searchText);	
		}
	};


	$scope.search = function(searchText){
	//	mainCtrl.getUser(searchText).
		//observe that we are simply providing name of Fns expressions
		//then(onUserComplete,onErr);	
		if(countInterval){
			$interval.cancel(countInterval);
			$scope.counter = 0;
		}
		$location.path('/user/'+searchText);
	};	
	
	$scope.searchText = "angular";
	$scope.message = "GitHub Viewer";
	$scope.counter = 5;
	startCounter();

	};

//maintain the array module dependency for the custom services to work
/*myApp.controller('getHttpNgServices',["$scope", "$interval","$location",getHttpNgServices]);*/
	myApp.controller('mainCtrl',mainCtrl);
	
})();