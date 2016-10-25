angular.module("BeatupApp")

.controller("SeattleController", ["$scope", function($scope){
    $scope.cityName = "Seattle";
    $scope.cityHeaderClass = "seattle-header";
    $scope.pText = "The rainy city slam, the Pike Place punchout. Blah Blah practice text. Trying to get my CSS aligned properly.";

}]);
