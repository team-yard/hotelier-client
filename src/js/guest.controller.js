(function() {
  'use strict';

  angular.module('hotelier')
    .controller('GuestController', GuestController);

    GuestController.$inject = [ 'GuestService' ];

    function GuestController(GuestService) {
      console.log('creating GuestController', GuestService);

      this.guest = {};

      this.createGuest = function createGuest(guest) {
        GuestService.createGuest(guest);
      };

    }


}());
