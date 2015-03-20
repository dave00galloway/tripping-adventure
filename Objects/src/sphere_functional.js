function sphere(radius) {
	var sphereObj = circle(radius);
	var circleArea = sphereObj.area;
	function area() {
                var a = 4 * circleArea.call(this); 
		return a;
	}
	sphereObj.area = area;
	return sphereObj;
}