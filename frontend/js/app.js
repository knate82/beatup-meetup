
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
  .when("/event", {
      templateUrl: "./templates/event.html",
      controller: "eventController"
  })
  .when("/cityview", {
      templateUrl: "./templates/cityview.html",
      controller: "SeattleController"
  })
  .otherwise("/main", {
      templateUrl: "./templates/main.html",
      controller: "MainController"
  });
});
