(function() {
  'use strict';


  angular.module('hotelier')
  .factory('LoginService', LoginService);

  LoginService.$inject = ['$http'];

  function LoginService($http){
    console.log('creating LoginService');

    return {
      addStaff: addStaff
    };


    function addStaff(){

    }



    /**
    * search api for list of all reservations
    * @return {Promise} the completed ajax call promise
    */
    function get(){
      return $http({
        url:'https://hotelier-api-iron.herokuapp.com/api/',
        method: 'GET'
      })
      .then(function onlyReturnData(response){
        console.log(response.data);
        return response;


      });


    }


  }






}());
