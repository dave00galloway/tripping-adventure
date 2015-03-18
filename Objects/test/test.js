TestCase("CircleTests", {
	"test my grip on reality" : function() {
		assertEquals(3, 4);
	},
	"test my grip on reality again" : function() {
		assertEquals(3, 3);
	},
	"test inspect objects" : function() {
		var circ = new Circle(6);
		var circ2 = {
			radius : 6
		};
		assertTrue(circ instanceof Object);
		assertTrue(circ instanceof Circle);
		assertTrue(circ2 instanceof Object);
		assertEquals(Circle, circ.constructor);
		assertEquals(Object, circ2.constructor);
	}
});