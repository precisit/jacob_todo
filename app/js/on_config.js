'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'ListCtrl as list',
    templateUrl: 'list.html',
    title: 'Todo'
  });

  $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;