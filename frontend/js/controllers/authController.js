angular.module('BeatupApp')

.controller('authController', ['$scope', 'UserService', '$location', function ($scope, UserService, $location) {

	$scope.newUser = {};
	$scope.loginUser = {};
	$scope.user = UserService.loggedInUser;

	$scope.login = function () {
		UserService.login($scope.loginUser).then(function () {
			$scope.user = UserService.loggedInUser;
			console.log("$scope.user", $scope.user);
			$scope.loginUser = {};
		});
	};

	$scope.logout = function () {
		UserService.logout().then(function () {
			$location.path('/logout');
		});
	};

	$scope.signup = function () {
		UserService.signup($scope.newUser).then(function (response) {
			UserService.login($scope.newUser).then(function (response) {
				$scope.newUser = {};
			});
		});
	};
}])