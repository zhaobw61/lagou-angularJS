'use strict'
angular.module('app').directive('appHead',['cache', function(cache){
    cache.testConsole('heade')
    console.log(cache)
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/head.html'
    }
}])