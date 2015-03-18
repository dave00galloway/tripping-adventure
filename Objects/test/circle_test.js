TestCase("CircleTest", {
	setUp : function() {
		this.circ = new Circle(6);
		this.circ2 = {
			radius : 6
		};
	},
	tearDown : function() {
		delete this.circ;
		delete this.circ2;
	},
	"test inspect objects" : function() {

		assertTrue(this.circ instanceof Object);
		assertTrue(this.circ instanceof Circle);
		assertTrue(this.circ2 instanceof Object);
		assertEquals(Circle, this.circ.constructor);
		assertEquals(Object, this.circ2.constructor);
	}
});