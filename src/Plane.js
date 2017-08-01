function Plane(){
  this._landed = true;
}
Plane.prototype.land=function(){
  this._landed = true;
  };
Plane.prototype.landed=function(){
  return this._landed;
} ;
