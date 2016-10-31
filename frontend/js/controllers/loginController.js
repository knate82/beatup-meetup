angular.module("BeatupApp")

.controller("LoginController", ["$scope", "$location", function($scope, $location){
    
    $scope.register = function(){
        $location.path("/signup");
    }
    
}])