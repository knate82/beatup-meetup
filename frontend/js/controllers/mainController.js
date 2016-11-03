angular.module("BeatupApp")

.controller("MainController", ["$scope", "$location", function($scope, $location){
    
    $scope.goToLogin = function(){
        $location.path("/login");
    }
    
    $scope.goToRegister = function(){
        $location.path("/signup");
    }
    
}])