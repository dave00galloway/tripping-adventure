function sphere(radius) {
	var sphereObj = circle(radius);
	var circleArea = sphereObj.area;
	function area() {
		return 4 * circleArea.call(this);
	}
	sphereObj.area = area;
	return sphereObj;
}