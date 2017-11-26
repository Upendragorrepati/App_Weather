'use strict';

appModule.controller('mainAppCtrl', function($scope, $location) {
   
        
    // On load of app
    $location.path('/currentWeather');
});