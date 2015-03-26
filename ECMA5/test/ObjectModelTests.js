TestCase("ES5ObjectTest", {
	"test defineProperty" : function() {
		var circle = {};
		Object.defineProperty(circle, "radius", {
			value : 4,
			writable : false,
			configurable : false
		});
		assertEquals(4, circle.radius);
	},
	"test changing a property descriptor" : function() {
		var circle = {
			radius : 3
		};
		var descriptor = Object.getOwnPropertyDescriptor(circle, "radius");
		descriptor.configurable = false;
		Object.defineProperty(circle, "radius", descriptor);
		delete circle.radius;
		// Non-configurable radius cannot be deleted
		assertEquals(3, circle.radius);
	},
	"test objects are unsealed by default" : function() {
		var object = {};
		assertFalse(Object.isSealed(object));
	},
	"test objects can be sealed" : function() {
		var object = {};
		Object.seal(object);
		assertTrue(Object.isSealed(object));
	},
	"test sealed objects' properties can be set" : function() {
		var object = {
			randomProp : "helicopter"
		};
		Object.seal(object);
		assertEquals(object.randomProp, "helicopter");
	},
	"test objects can be frozen" : function() {
		var object = {
			randomProp : "helicopter"
		};
		Object.freeze(object);
		object.randomProp = "2";
		assertEquals(object.randomProp, "helicopter");
	},
	"test property accessors" : function() {
		Object.defineProperty(circle, "diameter", {
			get : function() {
				return this.radius * 2;
			},
			set : function(diameter) {
				if (isNaN(diameter)) {
					throw new TypeError("Diameter should be a number");
				}
				this.radius = diameter / 2;
			}
		});
		circle.radius = 4;
		assertEquals(8, circle.diameter);
		circle.diameter = 3;
		assertEquals(3, circle.diameter);
		assertEquals(1.5, circle.radius);
		assertException(function() {
			circle.diameter = {};
		});
	}
});