'use strict'
angular.module('app').directive('appPositionList', ['$http',function($http){
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/positionList.html',
        scope: {
            data: '=',
            isLogin: '=',
            filterObj: '=',
            isfavorite:'='
        },
        link:function($scope){
            $scope.select = function(item){
                $http.post('data/favorite.json',{
                    id:item.id,
                    select: !item.select
                }).success(function(){
                    item.select = !item.select;
                })
            }
        }
    }
}]);