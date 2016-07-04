(function(){
	//observe the IIFE so this peace of code will be available as soon 
	// as the application loads(before loading main.js)
var githubService = function($http){
	var gitDomainUrl = 'https://api.github.com';

	var getUser = function(username){
		return $http.get(gitDomainUrl+'/users/'+username)
		//observe that we are simply providing name of Fns expressions
		.then(function(response){
			return response.data;
		},function(error){
			return error;
		});	
	};
	
	var getContributors = function(username,repo,contributors){
		return	$http.get(gitDomainUrl+'/repos/'+username+'/'+repo+"/"+contributors);
	};

	var getRepo = function(user){
		return $http.get(user.repos_url).then(function(response){
			return response.data;
		},function(error){
			return error;
		});
	};
	
	var repoDetails = function(username, repo){
		username	
		return $http.get(gitDomainUrl+'/repos/'+username+'/'+repo);
	};
	return {
		getUser: getUser,
		getRepo: getRepo,
		repoDetails: repoDetails,
		getContributors: getContributors
	};

};
//register and configure angular service
//the module name must match with your main.js moduleName
var module = angular.module('myApp');
	module.factory('githubService',githubService);
})();