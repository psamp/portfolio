;(function (){
  
  'use strict';

  angular.module('Psamp', ['ui.router', 'ngMaterial'])

  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('amber')
      .accentPalette('cyan');
  })

  .config(['$stateProvider', '$urlRouterProvider',

    function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'js/templates/home.tpl.html'
        })

        .state('portfolio', {
          url: '/portfolio',
          templateUrl: 'js/templates/portfolio.tpl.html'
        });

      }
    ]);

}());