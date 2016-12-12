(function() {
  'use strict';

  angular.module('hotelier')
    .controller('SingleReservationController', SingleReservationController);

    SingleReservationController.$inject = ['$stateParams', 'AllReservationsService'];

    function SingleReservationController($stateParams, AllReservationsService) {

      var vm = this;
      this.singleReservation = {};

      AllReservationsService.singleReservation($stateParams.id)
        .then(function successHandler(response) {
          vm.singleReservation = response.data;
          console.log('does this work?', vm.singleReservation);
        })
        .catch(function failHandler(xhr){
          console.log(xhr);
          console.log('that did not work');
        });
    }


}());
