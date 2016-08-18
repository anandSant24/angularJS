//Shaping with angularJS
//creating module and providing ngRoute directive details
angular.module('myNotesApp',['ngRoute'])
	.config(function($routeProvider){
		$routeProvider.when("/notes",{
			templateUrl: 'notes.html'
		})
		.when("/user",{
			templateUrl: 'user.html'
		})
		.when("/",{
			templateUrl: 'notes.html'
		})
		.otherwise('redirectTo','/');
});
