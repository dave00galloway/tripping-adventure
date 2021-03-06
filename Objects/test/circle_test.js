TestCase(
		"CircleTest",
		{
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
			},
			"test should create another object of same kind" : function() {
				this.circ2 = new this.circ.constructor(9);
				assertEquals(this.circ.constructor, this.circ2.constructor);
				assertTrue(this.circ2 instanceof Circle);
			},
			"test should inherit properties from Circle.prototype" : function() {
				assertEquals(12, this.circ.diameter());
			},
			"test constructor is Object when prototype is overridden" : function() {
				function Circle() {
				}
				Circle.prototype = {};
				assertEquals(Object, new Circle().constructor);
			},
			"ignore test calling prototype without 'new' returns undefined as using guard clause means a circle is returned" : function() {
				assertEquals("undefined", typeof this.circ);
				// Oops! Defined property on global object
				assertEquals(6, radius);
			},
			"test a = pi R Squared" : function() {
				assertEquals(113, Math.round(this.circ.area()));
			}
		});