(function() {
  'use strict';

  angular.module('hotelier',['ui.router'])
    .config(routerConfig);

  routerConfig.$inject=['$stateProvider'];

  function routerConfig($stateProvider) {
    $stateProvider
      .state({
        name: 'home',
        url: '',
        templateUrl: 'views/guest.template.html'

      })

      .state({
        name: 'roomsAvailable',
        url: '/rooms',
        templateUrl: 'views/rooms-available.template.html',
        controller: 'RoomsAvailableController',
        controllerAs: 'roomsAvailable'

      })

      .state({
        name: 'confirmation',
        url: '/confirmation',
        templateUrl: 'views/confirmation.template.html'

      });


  }
}());
