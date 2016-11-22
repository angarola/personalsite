(function () {
    "use strict";

    angular.module("APP", ["ngRoute"])
    .config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"})
    .when("/Portfolio", {
        templateUrl : "/Users/michaelangarola/Desktop/Personal Site/Views/Portfolio.html"})
    })
})();