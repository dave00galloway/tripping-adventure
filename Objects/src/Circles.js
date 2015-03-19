function Circle(radius) {
	this.radius = radius;
}

Circle.prototype = {
	constructor : Circle,
	diameter : function() {
		return this.radius * 2;
	}
// ,
// circumference : function() {
// return this.diameter() * Math.PI;
// },
// area : function() {
// return this.radius * this.radius * Math.PI;
// }
};