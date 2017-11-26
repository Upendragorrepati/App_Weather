'use strict';


var appModule = angular.module('weather-app', [
        'ngRoute'
    ]);


appModule.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    // Router config to current weather results and corrresponding controller
    .when("/currentWeather", {
        templateUrl : "modules/currentWeather/current_Weather.html",
        controller: "currentWeatherController"
    })
    // Router config to forecast weather results and corrresponding controller
    .when("/forecastWeather", {
        templateUrl : "modules/forecastWeather/forecast_Weather.html",
        controller:"forecastWeatherController"
    });
});