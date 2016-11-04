//创建模块
  var app=angular.module('myapp',['ngRoute']);
//新建路由
    app.config(function($routeProvider){
          $routeProvider
              .when('/index',{
                  template: '<p>首页内容</P>'
              })
              .when('/shop',{
                  templateUrl: 'tpl/shop.html',
                  controller: 'ShopController'
              })
              .when('/cart',{
                  templateUrl: 'tpl/cart.html',
                  controller: 'CartController'
              })
              .otherwise({
                  redirectTo: '/index'
              })
    });