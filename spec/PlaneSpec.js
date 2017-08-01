'use strict';

describe('Plane',function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    // /airport = jasmine.createSpyObj('airport',['clearForlanding']);
  });
  it('plane can land at an airport',function(){
    plane.land();
    expect(plane.landed()).toEqual(true);
  });

  it('plane can take off at an airport',function(){
    plane.takeOff();
    expect(plane.takenOff()).toEqual(false);
  });
});
