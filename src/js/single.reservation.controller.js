(function() {
  'use strict';

  angular.module('hotelier')
    .controller('SingleReservationController', SingleReservationController);

    SingleReservationController.$inject = ['$stateParams', '$state', 'AllReservationsService'];

    function SingleReservationController($stateParams, $state, AllReservationsService) {

      var vm = this;
      this.singleReservation = {};

      AllReservationsService.singleReservation(id)
        .then(function successHandler(data) {
          console.log('single success', data);
          console.log(id);
          vm.singleReservation = data;
          $state.go('singleReservation');
        })
        .catch(function failHandler(xhr){
          console.log(xhr);
          console.log('that did not work');
        });
    }


}());
