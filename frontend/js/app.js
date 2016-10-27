
angular.module("BeatupApp", ["ngRoute"])

.config(function($routeProvider){
  $routeProvider
  .when("/main", {
      templateUrl: "./templates/main.html",
      controller: "MainController"
  })
  .when("/signup", {
      templateUrl: "./templates/login.html",
      controller: "SignupController"
  })
  .when("/login", {
      templateUrl: "./templates/signup.html",
      controller: "LoginController"
  })
  .otherwise("/main", {
      templateUrl: "./templates/main.html",
      controller: "MainController"
  });
});
