function Plane(){
  this._landed = true;
  this.tookOff = false;
}
Plane.prototype.land=function(){
  this._landed = true;
  };
Plane.prototype.landed=function(){
  return this._landed;
} ;
Plane.prototype.takeOff=function(){
  this._tookOff = false;
};

Plane.prototype.takenOff=function(){
  return this._tookOff;
};
