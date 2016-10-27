angular.module("BeatupApp", ["ngRoute"])

.config(function($routeProvider){
  $routeProvider
  .when("/main", {
      templateUrl: "./templates/main.html",
      controller: "MainController"
  })
  .when("/signup", {
      templateUrl: "./templates/signup.html",
      controller: "SignupController"
  })
  .when("/login", {
      templateUrl: "./templates/login.html",
      controller: "LoginController"
  })
  .otherwise("/main", {
      templateUrl: "./templates/main.html",
      controller: "MainController"
  });
})
