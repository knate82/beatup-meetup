angular.module('BeatupApp')

.controller('authController', ['$scope', 'UserService', '$location', function ($scope, UserService, $location) {

	$scope.newUser = {};
	$scope.loginUser = {};
	$scope.user = UserService.loggedInUser;

	$scope.login = function (user) {
		UserService.login(user).then(function (response) {
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

    
	$scope.signup = function (user) {
        
		UserService.signup(user).then(function (response) {
			UserService.login(user).then(function (response) {
				$scope.user = {};
			});
		});
	};
    
}])