(function() {
  'use strict';

  angular.module('hotelier')
  .controller('AllReservationsController', AllReservationsController);

  AllReservationsController.$inject = [ 'AllReservationsService' ];


  function AllReservationsController(AllReservationsService){
    console.log('creating AllReservationsController');
    var vm = this;
    console.log(vm);

    this.reservations = [];

    AllReservationsService.getReservations()
    .then(function successHandeler(data){
      console.log('Its Working', data);
      vm.reservations = data.items;
    })
    .catch(function failHandler(xhr){
      console.log(xhr);
    });

    AllReservationsService.singleReservation(id)
      .then(function handleReservationSuccess(data) {
        vm.repo = data;
      })
      .catch(function handleReservationError(xhrError) {
        console.warn(xhrError);
      })
  }



}());
