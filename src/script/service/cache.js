'user strict';
angular.module('app').service('cache',['$cookies',function($cookies){
    var  myName = 'zhaobowen'
    this.put = function(key,value){
        $cookies.put(key,value);
    }
    this.get = function(key){
       return $cookies.get(key);
    }
    this.remove = function(key){
        $cookies.remove(key);
    }
    this.testConsole = function(name){
        console.log('console' + name);
        console.log(myName)
    }
}])