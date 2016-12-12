(function() {
  'use strict';

  var expect = chai.expect;

  describe('Able to add a new guest', function(){
    var GuestService;
    var $httpBackend;
    var $rootScope;


    beforeEach(module('hotelier'));


    beforeEach(inject(function(_$rootScope_, _$httpBackend_, _GuestService_){
      GuestService = _GuestService_;
      $httpBackend = _$httpBackend_;
      $rootScope = _$rootScope_;



      $httpBackend
      .whenPost('https://hotelier-api-yard.herokuapp.com/api/Guests')
      .respond({
        'id': '12345',
        'fullName': 'Syed',
        'email': 'syed@gmail.com',
        'phone': '7031231234',
        'reservations': []
      });

      $httpBackend
      .whenGET()
      .respond('rertreggfsgfs');


    }));


    it('should be able to add a new guest', function(doneCallback){

      var result = GuestService.createGuest({fullName:'Syed', email:'syed@gmail.com', phone:'703-123-1234'});
      expect(result).to.be.a('object');

      result
        .then(function(data){
          expect(data.fullName).to.equal('Syed');
          doneCallback();
      })
        .catch(function(){
          doneCallback('Should not reject this promise');
        });

      $httpBackend.flush();

    });


  });

}());
