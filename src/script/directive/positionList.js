'use strict'
angular.module('app').directive('appPositionList', [function(){
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/positionList.html',
        scope: {
            data: '='
        },
        link:function($scope){
            console.log($scope.data)
        }
    }
}]);