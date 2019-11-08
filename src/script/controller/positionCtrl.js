'use strict';
angular.module('app').controller('positionCtrl', ['$q', '$http', '$state', '$scope', 'cache', function ($q, $http, $state, $scope, cache) {
    $scope.isLogin = false;
    cache.testConsole('positionCtrl');
    function getPosition() {
        var def = $q.defer();
        $http.get('/data/position.json?id=' + $state.params.id).success(function (resp) {
            $scope.position = resp;
            def.resolve(resp);
        }).error(function (err) {
            def.reject(err);
        });
        return def.promise;
    }

    function getCompany(id) {
        $http.get('/data/company.json?id=' + id).success(function (resp) {
            $scope.company = resp;
        })
    }

    getPosition().then(function (obj) {
        getCompany(obj.companyId)
    })
}])