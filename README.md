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

#### 
