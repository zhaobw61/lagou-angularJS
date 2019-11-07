# lagou-angularJS

练手项目

#### 第四章 9-13 节

### 笔记

#### 常用 API

(1) angular.module: 创建一个模块，配合 ng-app 使用

(2) angular.directive(): 创建一个组件。

`angular.module('app').directive('appFoot'); <div app-foot></div>`

(3) angular.config: 配置路由

(4) angular.controller('mainCtrl'): 创建一个控制器

#### 自定义指令

(1) <my-dir></my-dir>

(2) <span my-dir></span>

(3) <!-- directtive: my-dir -->

(4) <span class="my-dir">zhaobowen</span>

#### 给自定义指令传递数据

(1) 在指令 html 上添加属性
`<div app-position-list data="list"></div>`
(2) 在指令里添加相关属性
`scope: { data: '=' },`

#### $q

目的是为了实现延迟加载和promise

#### 控制器和作用域

(1) 控制器(controller):视图对应的业务逻辑，为数据模型添加行为和属性

(2) 作用域($scope):保存数据模型和行为

(3) $id: 唯一对应$scope

(4) $parent: $scope的父作用域

(5) $root:？？？

(6) $watch $on $broadcast $emit $digest

#### 广播事件

(1) 向下广播
$scope.$broadcast('abc',{id:1});
$scope.$on('abc',function(event,data){})

(2)向上广播
$scope.$emit('abc',{id:1});
$scope.$on('abc',function(event,data){})

注意：在接受方还没有初始化完成，广播就已经结束了

#### $digest

$scope.$digest:当双向数据绑定失效，可以调用下。

### $watch

监听一个值的变化

