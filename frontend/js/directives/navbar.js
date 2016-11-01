angular.module("BeatupApp")

.directive("navbar", function(){
	return {
		templateUrl: "directives/navbar.html",
		restrict: "EA"
	};
})