(function() {
  'use strict';

  angular.module('hotelier')
    .factory('GuestService', GuestService);

    GuestService.$inject =['$http'];

    function GuestService($http) {

      return {
        createGuest: createGuest
      };

      function createGuest(guest) {
        console.log('am i ettore?', guest);
        return $http({
          url:'https://hotelier-api-iron.herokuapp.com/api/Guests',
          data: {
            fullName: guest.fullName,
            email: guest.email,
            phone: guest.phone
          },
          method: 'post',
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then(function successHandeler(reponse) {
          console.log(reponse);
          return reponse;
        });
      }
    }



}());
