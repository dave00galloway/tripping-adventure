TestCase("SphereTests", {

	setUp : function() {
		this.radius = 6;
		this.sphere = new Sphere(this.radius);
	},
	tearDown : function() {
		delete this.sphere;
	},
	"test sphere is an instance of circle" : function() {
		assertTrue(this.sphere instanceof Circle);

	},
	"test sphere is an instance of sphere" : function() {
		assertTrue(this.sphere instanceof Sphere);
	},
	"test sphere is an instance of object" : function() {
		assertTrue(this.sphere instanceof Object);
	},
	"test spheres are circles in 3D" : function() {
		assertEquals(12, this.sphere.diameter());
	}
//

});
