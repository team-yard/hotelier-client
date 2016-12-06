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
        name: 'rooms-available',
        url: '/rooms',
        templateUrl: 'views/rooms-avalable.template.html'

      })

  }
}());
