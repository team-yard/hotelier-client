(function() {
  'use strict';

  angular.module('hotelier',['ui.router'])
    .config(routerConfig);

  routerConfig.$inject=['$stateProvider'];

  function routerConfig($stateProvider) {

    $stateProvider
      .state({
        name: 'staffLogin',
        url: '/staffLogin',
        templateUrl: 'views/staffLogin.template.html'
      })

      .state({
        name: 'reservations',
        url: '/reservations',
        templateUrl: 'views/reservations.template.html'
      })

      .state({
        name: 'guestList',
        url: '/guestList',
        templateUrl: 'views/allGuest.template.html'
      })

      .state({
        name: 'createGuest',
        url: '/createGuest',
        templateUrl: 'views/createGuest.template.html'
      })

      .state({
        name: 'createReservation',
        url: '/createReservation',
        templateUrl: 'views/createReservations.template.html'
      });




  }
}());
