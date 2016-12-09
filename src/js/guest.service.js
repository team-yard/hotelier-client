(function() {
  'use strict';

  angular.module('hotelier')
    .factory('GuestService', GuestService);

    GuestService.$inject =['$http'];

    function GuestService($http) {

      return {
        createGuest: createGuest
      };
      /**
       * this creates a guest and send it to the API
       * @param  {object} guest staff will create a guest with properties
       * @return {Promise}       the completed ajax call promise
       */
      function createGuest(guest) {
        return $http({
          url:'https://hotelier-api-iron.herokuapp.com/api/Guests',
          data: {
            fullName: guest.fullName,
            email: guest.email,
            phone: guest.phone
          },
          method: 'post',
          headers: {
            'Authorization' : guest.token,
            'Content-type': 'application/json'
          }
        })
        .then(function successHandeler(reponse) {
          return reponse;
        });
      }
    }



}());