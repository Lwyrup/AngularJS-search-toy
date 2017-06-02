var app = angular.module('searchApp', []);

app.controller('myCtrl', function($scope) {
    $scope.search = "John";
    $scope.people = [
	    {fname:"Steve", lname:"Austin"},
	    {fname:"Mark", lname:"Hamil"},
	    {fname:"Mark", lname:"Zuckerberg"},
	    {fname:"Jeff", lname:"Kaplan"},
	    {fname:"John", lname:"Smith"},
	    {fname:"Fred", lname:"Durst"},
	    {fname:"Demetri", lname:"Martin"}
    ];
});

app.directive("searchStatus", function(){
	return{
		template: "<h3 ng-show='search'>Search results for {{search}}</h3>"
	}
});