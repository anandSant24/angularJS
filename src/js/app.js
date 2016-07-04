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
		}).when('/repo/:username/:reponame',{
				//url to use is http://localhost:8000/#/repo/username/reponame
			templateUrl:"repoDetails.html",
			controller:"repoController"	
		})
		.otherwise({redirectTo:"/main"});
	});

})();