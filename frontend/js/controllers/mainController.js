angular.module("BeatupApp")

.controller("MainController", ["$scope", "$location", "UserService", function($scope, $location, UserService){
	
	if(UserService.loggedInUser){
		$scope.userIsLoggedIn = true;
		console.log($scope.userIsLoggedIn)
	}
    
    $scope.goToLogin = function(){
        $location.path("/login");
    }
    
    $scope.goToRegister = function(){
        $location.path("/signup");
    }
    
}])