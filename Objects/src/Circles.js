function Circle(radius) {
	if (!(this instanceof Circle)) {
		/*
		 * some would argue it is better to throw an exception here I'm not sure
		 * since throwing an exception doesnt always stop execution, and may go
		 * unnoitced. Probably better to create the object, although there's a
		 * risk that if its being really badly misused of running out of stack
		 * space
		 */
		return new Circle(radius);
	}
	this.radius = radius;
}
// avoid missing constructor by using extensions
(function(p) {
	p.diameter = function() {
		return this.radius * 2;
	};
	p.circumference = function() {
		return this.diameter() * Math.PI;
	};
	p.area = function() {
		return this.radius * this.radius * Math.PI;
	};
}(Circle.prototype));

(function(circleProto) {
	// Functions declared in this scope are private, and only
	// available to other functions declared in the same scope
	function ensureValidRadius(radius) {
		return radius >= 0;
	}
	function getRadius() {
		return this.radius;
	}
	function setRadius(radius) {
		if (ensureValidRadius(radius)) {

		}
		this.radius = radius;
	}

	// Assigning the functions to properties of the prototype
	// makes them public methods
	circleProto.getRadius = getRadius;
	circleProto.setRadius = setRadius;
	//this is better than creating them in the constructor as they only get defined once
	//but property resolution is slower. - there is a trade off.
}(Circle.prototype));

// Circle.prototype = {
// constructor : Circle,
// diameter : function() {
// return this.radius * 2;
// }
// ,
// circumference : function() {
// return this.diameter() * Math.PI;
// },
// area : function() {
// return this.radius * this.radius * Math.PI;
// }
// };
