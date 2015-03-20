function sphere(radius) {
	var sphereObj = circle(radius);
	var circleArea = sphereObj.area;
	function area() {
		// stack overflow! return 4 * sphereObj.area.call(this);
		return 4 * circleArea.call(this); // book solution
		// var a = sphereObj.area();
		// return 4 * a;
	}
	sphereObj.area = area;
	return sphereObj;
}

// The functional style is an interesting alternative to the pseudo-classical
// con- structors, but comes with its own limitations. The two most obvious
// drawbacks of this style of coding are that every object keeps its own copy of
// every function, increasing memory usage, and that in practice we aren’t using
// the prototype chain, which means more cruft when we want to call the “super”
// function or something similar.

// limited experimentation here shows that it might be possible to simplify the
// method chain a bit, but you end up with always calculating the area and
// storing it as a
// field, which migh tbe worse than storing a copy of a function
