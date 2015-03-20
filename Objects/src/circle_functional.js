function circle(radius) {
	function getSetRadius() {
		if (arguments.length > 0) {
			if (arguments[0] < 0) {
				throw new TypeError("Radius should be >= 0");
			}
			radius = arguments[0];
		}
		return radius;
	}
	function diameter() {
		return radius * 2;
	}
	function circumference() {
		return diameter() * Math.PI;
	}
	return {
		radius : getSetRadius,
		diameter : diameter,
		// area : area,
		circumference : circumference
	};
}