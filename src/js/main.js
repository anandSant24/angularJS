var myApp = angular.module('myApp', []);

var getHttpNgServices = function($scope){
	$scope.message = "Hello Anand";
};

myApp.controller('getHttpNgServices',getHttpNgServices);