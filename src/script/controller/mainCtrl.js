'use strict';
angular.module('app').controller('mainCtrl',['$scope',function($http,$scope){
    $scope.list = [{
        id: '1',
        name: '销售',
        imgSrc: 'image/company-3.png',
        companyName: '千度',
        cityName: '上海',
        industryName: '互联网',
        time: '2016-06-01 11:05'
    },{
        id: '2',
        name: 'WEB销售',
        imgSrc: 'image/company-1.png',
        companyName: '慕课网',
        cityName: '北京',
        industryName: '互联网',
        time: '2016-06-01 12:05'
    }]
    $scope.name = 'zhaobowen'
}])