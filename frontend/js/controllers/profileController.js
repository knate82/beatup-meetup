angular.module("BeatupApp")

.controller("ProfileController", ["$scope", "UserService", function($scope, UserService){
    
    $scope.user = UserService.loggedInUser;
    
    $scope.logout = function(){
        UserService.logout();
    }
    
}])