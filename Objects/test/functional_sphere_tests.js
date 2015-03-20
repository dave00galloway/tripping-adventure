TestCase("Functional SphereTests", {

	setUp : function() {
		this.radius = 6;
		this.ball = sphere(this.radius);
	},
	tearDown : function() {
		delete this.ball;
	},
	"test sphere is an instance of Function" : function() {
		assertTrue(this.ball.constructor instanceof Function);
	},
	"test spheres are circles in 3D" : function() {
		assertEquals(12, this.ball.diameter());
	},
	"test should calculate sphere area" : function() {
            var ballArea = this.ball.area();
		assertEquals(113, Math.round(ballArea));
	}
//

});
