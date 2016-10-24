var app = angular.module("BeatupApp", ["ngRoute"]);

//these are the routes for angular views
app.config(function($routeProvider){
  $routeProvider
  .when("/main", {
    templateUrl: "./templates/main.html",
    controller: "MainController"
  })
  .otherwise("/main", {
      templateUrl: "./templates/main.html",
        controller: "MainController"
  });
});
