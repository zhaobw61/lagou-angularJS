'use strict';
angular.module('app').controller('loginCtrl',['cache','$state','$http','$scope',function(cache,$state, $http,$scope){
    $scope.submit = function(){
        $http.post('data/login.json',$scope.user).success(function(resp){
            cache.put('id',rep.id);
            cache.put('name',rep.name);
            cache.put('image',rep.image);
            $state.go('main');
        })
    }
}])