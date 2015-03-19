function Sphere(radius) {
	this.radius = radius;
}
Sphere.prototype = (function() {
	function F() {
	}
	;
	F.prototype = Circle.prototype;
	return new F();
}());
// Don't forget the constructor - else it will resolve as
// Circle through the prototype chain
Sphere.prototype.constructor = Sphere;