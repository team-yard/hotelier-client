(function() {
  'use strict';

  angular.module('hotelier')
    .factory('GuestService', GuestService);

    GuestService.$inject =['$http'];

    function GuestService($http) {
      console.log('creating GuestService', $http);

      return {
        createGuest: createGuest
      };

      function createGuest() {
        return $http({
          url:'https://hotelier-api-iron.herokuapp.com/api//Guests',
          method: 'GET'
        })
        .then(function successHandeler(reponse) {
          console.log(reponse);
          return reponse;
        });
      }
    }



}());
