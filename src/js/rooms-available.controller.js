(function() {
    'use strict';

    angular.module('hotelier')
        .controller('RoomsAvailableController', RoomsAvailableController);

    RoomsAvailableController.$inject = [ '$stateParams','RoomsService', 'AllReservationsService' ];

    function RoomsAvailableController($stateParams, RoomsService, AllReservationsService) {
        console.log('creating the controller');
        var vm = this;
        this.resNumber = {};

        this.rooms = [];

        RoomsService.getRooms()
            .then(function successHandler(data) {

                console.log('controller', data);
                vm.rooms = data;
                console.log(vm.rooms, 'vm');
            })
            .catch(function failHandler(xhr) {
                console.warn(xhr);

            });

        this.singleReservation = function singleReservation(id) {
          AllReservationsService.singleReservation(id)
            .then(function successHandler(data) {
              console.log('single success', data);
              console.log(id);
              vm.singleReservation = data;
            })
            .catch(function failHandler(xhr){
              console.log(xhr);
            });
        };
    }

})();
