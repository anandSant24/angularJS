(function(){
	//observe the IIFE so this peace of code will be available as soon 
	// as the application loads(before loading main.js)
var githubService = function($http){
	var getUser = function(username){
		return $http.get('https://api.github.com/users/'+username)
		//observe that we are simply providing name of Fns expressions
		.then(function(response){
			return response.data;
		},function(error){
			return error;
		});	
	};
	var getRepo = function(user){
		return $http.get(user).then(function(response){
			return response;
		},function(error){
			return error;
		});
	};
	return {
		getUser: getUser,
		getRepo: getRepo
	};
};
//register and configure angular service
//the module name must match with your main.js moduleName
var module = angular.module('myApp');
	module.factory('githubService',githubService);
})();