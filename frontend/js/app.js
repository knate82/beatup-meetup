angular.module("BeatupApp", ["ngRoute"])

.config(function($routeProvider){
  $routeProvider
  .when("/main", {
    templateUrl: "./templates/main.html",
    controller: "MainController"
  })
  .otherwise("/main", {
      templateUrl: "./templates/main.html",
        controller: "MainController"
  });
})
