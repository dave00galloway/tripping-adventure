function Circle(radius) {
	this.radius = radius;
}

Circle.prototype.diameter = function() {
	return this.radius*2;
};