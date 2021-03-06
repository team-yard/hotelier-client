(function() {
  'use strict';

  angular.module('hotelier')
  .factory('AllReservationsService', AllReservationsService);

  AllReservationsService.$inject = ['$http', 'LoginService'];

  function AllReservationsService($http, LoginService){
    return {
      getReservations: getReservations,
      singleReservation: singleReservation
    };


    /**
    * search api for list of all reservations
    * @return {Promise} the completed ajax call promise
    */
    function getReservations(){
      return $http({
        url:'https://hotelier-api-yard.herokuapp.com/api/Reservations',
        method: 'GET',
        headers:{
          Authorization: LoginService.isLoggedIn(),
        }
      })
      .then(function onlyReturnData(response){

        return response.data;
      });
    }

    /**
     * Upon its call, singleReservationpulls information about A SINGLE RESERVATION.
     * Upon completion, the responsefrom angular is transformed to return the data in t
     * he promise callback.
     * @param {Number} id Reservation ID number that is provdided from the form in HTML.
     * @return {Promise}
     */

      function singleReservation(id) {
          return $http({
            url: 'https://hotelier-api-yard.herokuapp.com/api/Reservations/' + id,
            method: 'GET',
            headers: {
              Authorization: LoginService.isLoggedIn(),
            }
        })
        .then(function handleSuccess(response) {
          return response.data;
        });
      }
  }
}());
