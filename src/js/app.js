(function(){
	var myApp = angular.module('myApp',['ngRoute']);

	//we are going to config the routes here
		myApp.config(function($routeProvider){
		$routeProvider
		.when("/main",{
			templateUrl: 'main.html',
			controller: 'mainCtrl'
		})
		.when("/user/:searchText",{
			templateUrl:"user.html",
			controller:"userController"
		})
		.otherwise({redirectTo:"/main"});
	});

})();