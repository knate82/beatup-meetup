angular.module('BeatupApp')

.controller('authController', ['$scope', 'UserService', '$location', function ($scope, UserService, $location) {

	$scope.newUser = {};
	$scope.user = {};
//	$scope.user = UserService.loggedInUser;

	$scope.login = function () {
		UserService.login($scope.user).then(function () {
			$scope.user = UserService.loggedInUser;
			console.log("$scope.user", $scope.user);
			$scope.loginUser = {};
		});
	};
    
    $scope.goToLogin = function(){
        $location.path("/login");
    }

    $scope.goToRegister = function(){
        $location.path("/signup");
    }

	$scope.logout = function () {
		UserService.logout().then(function () {
			$location.path('/logout');
		});
	};

	$scope.signup = function () {
		UserService.signup($scope.user).then(function (response) {
			UserService.login($scope.newUser).then(function (response) {
				$scope.newUser = {};
			});
		});
	};
}])