"use strict";
TestCase("HybridCircleTest", {
	"test Object.create backed constructor" : function() {
		var hcircle = new HybridCircle(3);
		//assert(hcircle instanceof HybridCircle);
		assertEquals(6, hcircle.diameter);
		hcircle.radius = 6;
		assertEquals(12, hcircle.diameter);
		// delete hcircle.radius; //throws type error on strict
		assertEquals(6, hcircle.radius);
	},
	"test omitting new when creating circle" : function() {
		var circle = HybridCircle(3);
		//assert(circle instanceof HybridCircle);
		assertEquals(6, circle.diameter);
	},
	"test using a custom create method" : function() {
		var circle = Object.create({}, {
			diameter : {
				get : function() {
					return this.radius * 2;
				}
			},
			circumference : { /* ... */},
			area : { /* ... */},
			create : {
				value : function(radius) {
					var circ = Object.create(this, {
						radius : {
							value : radius
						}
					});
					return circ;
				}
			}
		});
		var myCircle = circle.create(3);
		assertEquals(6, myCircle.diameter);
		assert(circle.isPrototypeOf(myCircle));
		// circle is not a function
		assertException(function() {
			assertFalse(myCircle instanceof circle);
		});

	}
});