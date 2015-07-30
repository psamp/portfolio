;(function (){
  
  'use strict';

  angular.module('Psamp', ['ui.router', 'ngMaterial', 'duScroll'])

  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('cyan')
      .accentPalette('purple');
  })

  .config(['$stateProvider', '$urlRouterProvider',

    function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          controller: 'HomeCtrl',
          templateUrl: 'js/templates/home.tpl.html'
        })

        .state('portfolio', {
          url: '/portfolio',
          templateUrl: 'js/templates/portfolio.tpl.html'
        });

      }
    ]);

}());