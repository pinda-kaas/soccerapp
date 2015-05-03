'use strict';

/**
 * @ngdoc overview
 * @name soccerAppApp
 * @description
 * # soccerAppApp
 *
 * Main module of the application.
 */
angular
  .module('soccerAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/detail', {
        templateUrl: 'views/bloggerdetail.html',
        controller: 'DetailCtrl'
      })
      .when('/detailform', {
        templateUrl: 'views/detailform.html',
        controller: 'DetailFormCtrl'
      })


      .otherwise({
        redirectTo: '/'
      });
  });
