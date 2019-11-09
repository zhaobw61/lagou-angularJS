'use strict';
angular.module('app').controller('searchCtrl',['$http','$state','$scope',function($http,$state,$scope){
  $http.get('data/positionList.json').success(function(resp){
    $scope.positionList = resp;
  })
}])