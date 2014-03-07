// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('mojo', ['ionic', 'mojo.services', 'mojo.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('alarms', {
        url: "/alarms",
        templateUrl: 'templates/alarms-index.html',
        controller: 'AlarmsCtrl'
    })
    .state('add-alarm',{
        url: '/alarms/add',
        templateUrl: 'templates/alarms-add.html',
        controller:'AddAlarmCtrl'
    })
    .state('edit-alarm', {
        url:'/alarms/:alarmId',
        templateUrl: 'templates/alarms-edit.html',
        controller: "EditAlarmCtrl"
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('alarms');

});