(function() {
  'use strict';

  angular.module('hotlier')
  .factory('AllReservationsService', AllReservationsService);

  AllRerservationsService.$inject = ['$http'];

  function AllRerservationsService($http){
    console.log('creating AllRerservationsService');

    return {
      getReservations: getReservations
    };


    /**
    * search api for list of all reservations
    * @return {Promise} the completed ajax call promise
    */
    function getReservations(){
      return $http({
        url:'https://hotelier-api-iron.herokuapp.com/api/',
        method: 'GET /Reservations'
      })
      .then(function onlyReturnData(response){

        return response.data;

      });


    }


  }


}());
