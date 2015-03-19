function Circle(radius) {
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