'use strict'
angular.module('app').directive('appPositionList', [function(){
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/positionList.html',
        scope: {
            data: '=',
            isLogin: '='
        },
        link:function($scope){
            console.log($scope.data)
        }
    }
}]);