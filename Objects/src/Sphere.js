//using inherit abstraction
function Sphere(radius) {
	//this.radius = radius;
	//call the circle constructor to set the prototype and constructor chains properly
	Circle.call(this, radius); //emulate super =from Java
}
Sphere.inherit(Circle);

Sphere.prototype.area = function() {
	return 4 * Circle.prototype.area.call(this);
};

//clunky inheritance
//function Sphere(radius) {
//	this.radius = radius;
//}
//Sphere.prototype = (function() {
//	function F() {
//	}
//	;
//	F.prototype = Circle.prototype;
//	return new F();
//}());
//// Don't forget the constructor - else it will resolve as
//// Circle through the prototype chain
//Sphere.prototype.constructor = Sphere;