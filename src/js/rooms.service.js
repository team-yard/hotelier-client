(function() {
    'use strict';

    angular.module('hotelier')
        .factory('RoomsService', RoomsService);

    RoomsService.$inject = [ '$http' ];

    function RoomsService($http) {
        console.log('creating service');


        return {
            getRooms: getRooms,
            getRoom: getRoom
        };

        /**
         * Get rooms from api call
         * @return {Promise}     the completed ajax call promise
         */
        function getRooms() {
            return $http({
                url: 'https://hotelier-api-iron.herokuapp.com/api/Rooms',
                method: 'GET'
            })
            .then(function onlyReturnData(response) {
                console.log(response);

                return response.data;
            });
        }
      /**
       * Upon its call, getRoom pulls information about A SINGLE ROOM. Upon completion, the response
       * from angular is transformed to return the data in the promise callback.
       * @param {Number} id Reservation ID number that is provdided from the form in HTML.
       * @return {Promise} 
       */
        function getRoom(id) {
            return $http ({
              url: 'https://hotelier-api-iron.heroku.com/api/Rooms/:id',
              method: 'GET',
              params: {
                q: id
            }
          })
          .then(function handleSuccess(response) {
            return response.data;
          });
        }
    }

})();
