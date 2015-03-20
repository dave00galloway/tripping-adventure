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
        function area() {
                var a = radius * radius * Math.PI;
		return a;
	}
	return {
		radius : getSetRadius,
		diameter : diameter,
                area : area,
		circumference : circumference
	};
}
// In his book, JavaScript: The Good Parts [5], and on his website, Douglas
// Crockford promotes what he calls functional inheritance. Functional
// inheritance is the next logical step from Listing 7.43, in which we’ve
// already eliminated most uses of the this keyword. In functional inheritance,
// the use of this is eliminated completely and the constructor is no longer
// needed. Instead, the constructor becomes a reg- ular function that creates an
// object and returns it. The methods are defined as nested functions, which can
// access the free variables containing the object’s state. Listing 7.44 shows
// an example.

// Crockford calls an object like the ones created by circle durable [6]. When
// an object is durable, its state is properly encapsulated, and it cannot be
// compromised by outside tampering. This is achieved by keeping state in free
// variables inside closures, and by never referring to the object’s public
// interface from inside the object. Recall how we defined all the functions as
// inner private functions first, and then assigned them to properties? By
// always referring to the object’s capability in terms of these inner
// functions, offending code cannot compromise our object by, e.g., injecting
// its own methods in place of our public methods.
