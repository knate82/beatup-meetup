angular.module("BeatupApp")

.controller("MainController", ["$scope", "$location", function($scope, $location){
    
    $scope.login = function(){
        $location.path("/login");
    }
    
    $scope.register = function(){
        $location.path("/signup");
    }
    
}])