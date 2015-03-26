TestCase("HybridCircleTest", {
	"test Object.create backed constructor" : function() {
		var circle = new HybridCircle(3);
		assert(circle instanceof HybridCircle);
		assertEquals(6, circle.diameter);
		circle.radius = 6;
		assertEquals(12, circle.diameter);
		delete circle.radius;
		assertEquals(6, circle.radius);
	}
});