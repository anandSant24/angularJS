(function(){
	var app=angular.module('myApp');

	var repoController = function($scope, githubService){
		// get contributors details https://api.github.com/repos/angular/angular.js/contributors
		var contributors = 'contributors';
			
		var contributorsImage = function(response){
				$scope.images = response.data;
		};

		function getContributors(){
				githubService.getContributors("angular","angular.js",'contributors')
				.then(contributorsImage);
		}

		var onRepoDetails = function(response){	
			$scope.openIssues = response.data.open_issues;
			getContributors();
		};

		var onError = function(error){
			console.log(error);
		};
		//username(angular) and repo(angular.js) details are hard coded here
		githubService.repoDetails("angular","angular.js")
		.then(onRepoDetails, onError);
	};

	app.controller('repoController', ['$scope','githubService',repoController]);
})();