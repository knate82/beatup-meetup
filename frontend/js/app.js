<<<<<<< HEAD
=======

>>>>>>> 7ea4e5e6ceb13488ed119a42bc6d2dbe03aea81d
angular.module("BeatupApp", ["ngRoute", "MeetupApp.Auth"])

.config(function($routeProvider){
  $routeProvider
  .when("/main", {
      templateUrl: "./templates/main.html",
      controller: "MainController"
  })
  .when("/signup", {
      templateUrl: "./templates/signup.html",
      controller: "authController"
  })
  .when("/login", {
      templateUrl: "./templates/login.html",
      controller: "authController"
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

