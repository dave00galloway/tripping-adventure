function Circle(radius) {
	if (!(this instanceof Circle)) {
		/*some would argue it is better to throw an exception here
		 * I'm not sure since throwing an exception doesnt always stop execution, 
		 * and may go unnoitced. Probably better to create the object,
		 * although there's a risk that if its being really badly misused of running out of stack space
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

//Circle.prototype = {
//	constructor : Circle,
//	diameter : function() {
//		return this.radius * 2;
//	}
// ,
// circumference : function() {
// return this.diameter() * Math.PI;
// },
// area : function() {
// return this.radius * this.radius * Math.PI;
// }
//};