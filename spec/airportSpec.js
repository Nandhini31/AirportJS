describe('Airport', function(){

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  describe('land a plane',function(){
    it('returns true when plane.land is called',function(){
      expect(airport.plane_land(plane)).toEqual(true);
    });


  });
});
