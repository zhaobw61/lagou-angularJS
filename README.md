# lagou-angularJS
练手项目

#### 第四章9-13节

### 笔记

#### 常用API

(1) angular.module: 创建一个模块，配合ng-app使用

(2) angular.directive(): 创建一个组件。

`
    angular.module('app').directive('appFoot');
    <div app-foot></div>
`

(3) angular.config: 配置路由

(4) angular.controller('mainCtrl'): 创建一个控制器

#### 自定义指令

(1) <my-dir></my-dir>

(2) <span my-dir></span>

(3) <!-- directtive: my-dir -->

(4) <span class="my-dir">zhaobowen</span>