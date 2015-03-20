function create_sphere(radius) {

	var circ = circle(radius);
	//using ecma5+ create method
	var sphere = Object.create(circ);

	sphere.area = function() {
		return 4 * circ.area.call(this);
	};
	return sphere;
}