(function() {
  'use strict';

  angular.module('hotelier')
    .controller('LoginController', LoginController);


    LoginController.$inject = [ 'LoginService' ];

    function LoginController(LoginService){

      this.staff = {};

      function passStaff(staff){
        LoginService.addStaff(staff);
      }

    }
}());
