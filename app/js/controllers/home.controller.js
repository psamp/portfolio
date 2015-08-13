;(function (){

  'use strict';

  angular.module('Psamp')

  .controller('HomeCtrl', ['$scope', '$location', '$mdDialog', '$uiViewScroll',

    function ($scope, $location, $mdDialog, $uiViewScroll) {

      var myWork = [

        {
          id: 0,
          name: 'Leet',
          desc: 'MVP that brings together users with overlapping layovers. Worked with Ruby on Rails developers.',
          screencap_url: '../assets/leet.png',
          github_url: 'https://github.com/leet-app/FE',
          deployed_url: 'http://development.leet.divshot.io/#/',
          built_with: [
            'Angular',
            'Angular Material',
            'HTML',
            '(S)CSS',
            'Google Material Icons',
            'Bourbon/Neat',
            'Custom Rails backend',
            'Underscore'
          ]
        },
        {
          id: 1,
          name: 'Ficlist',
          desc: 'Contacts list with persistent data, themed around fictional characters. Solo project.',
          screencap_url: '../assets/ficlist.png',
          github_url: 'https://github.com/psamp/ficlist',
          deployed_url: 'http://development.psamp-ficlist.divshot.io',
          built_with: [
            'Backbone',
            'HTML',
            '(S)CSS',
            'Nourbon/Neat',
            'MongoDB Backend',
            'Font-Awesome',
            'Underscore'
          ]
        },
        {
          id: 2,
          name: 'Etsy Clone',
          desc: 'Clone of an Etsy search page. Solo project.',
          screencap_url: '../assets/etsy.png',
          github_url: 'https://github.com/psamp/EtsySearch_Notebooks',
          deployed_url: 'http://psamp.github.io/EtsySearch_Notebooks',
          built_with: [
            'HTML',
            '(S)CSS',
            'Bourbon/Neat',
            'jQuery',
            'Static JSON'
          ]
        },
        {
          id: 3,
          name: 'The Fox Tail',
          desc: 'Website for a restaurant, based on the functionality requested from an imagined client. Group project.',
          screencap_url: '../assets/foxtail.png',
          github_url: 'https://github.com/krose422/the-fox-tail-restaurant',
          deployed_url: 'http://krose422.github.io/the-fox-tail-restaurant/',
          built_with: [
            'HTML',
            '(S)CSS',
            'jQuery',
            'Bourbon/Neat',
            'Menu API',
            'Flickr API',
            'Underscore'
          ]
        },
        {
          id: 4,
          name: 'What Color Is It?',
          desc: 'Clock that converts the time of day into CSS hex color values, changing the background of the page to match.',
          screencap_url: '../assets/whatcolor.png',
          github_url: 'https://github.com/psamp/Hexadecimal-Color-Clock_Normal',
          deployed_url: 'http://psamp.github.io/Hexadecimal-Color-Clock_Normal/',
          built_with: [
            'HTML',
            '(S)CSS',
            'jQuery'
          ]
        },
        {
          id: 5,
          name: 'Surf & Paddle',
          desc: 'Reproduction of a vector of a blog layout, aiming for pixel perfection.',
          screencap_url: '../assets/sandp.png',
          github_url: 'https://github.com/psamp/Surf_Paddle',
          deployed_url: 'https://psamp.github.io/Surf_Paddle/',
          built_with: [
            'HTML',
            '(S)CSS',
          ]
        },
        {
          id: 6,
          name: 'g.s.d',
          desc: 'Simple todo list.',
          screencap_url: '../assets/todo.png',
          github_url: 'https://github.com/psamp/g.s.d',
          deployed_url: 'https://development.psamp-todo.divshot.io',
          built_with: [
            'HTML',
            '(S)CSS',
            'jQuery',
            'Underscore'
          ]
        }

      ];

      $scope.work = myWork;

      var stack = myWork.map(function(s){
        return s.built_with;
      });

      var displayStack = stack.map(function(s) {
        return s;
      });

      $scope.stack = stack;

      // console.log('s', stack);

      $scope.toWork = function() {
        $location.hash('work');
        $uiViewScroll();
      };
      $scope.toAbout = function() {
        $location.hash('aboutandcontact');
        $uiViewScroll();
      };
    }
  ]);

}());
