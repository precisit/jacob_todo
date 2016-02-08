'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'ContentCtrl as content',
    templateUrl: 'content.html',
    title: 'Todo'
  });

  $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;