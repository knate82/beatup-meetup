angular.module("BeatupApp")

.controller("SignupController", ["$scope", "$location", function($scope, $location){
    
    $scope.login = function(){
        $location.path("/login");
    }
    
    $scope.logUserInfo = function(user){
        
    }
    
}])