TestCase(
		"Functional CircleTest",
		{
			setUp : function() {

				// Because circle is no longer a constructor, its name is no
				// longer capitalized. To use this new function we omit the new
				// keyword
				this.circ = circle(6);
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
				assertFalse(this.circ instanceof circle);
				assertTrue(this.circ2 instanceof Object);
				// assertEquals(Object(), this.circ.constructor);
				assertEquals(Object, this.circ2.constructor);
			},
			"ignore test should create another object of same kind" : function() {

				var circle2 = new this.circ.constructor(9);
				assertEquals(this.circ.constructor, circle2.constructor);
				assertTrue(circle2 instanceof circle);
			},
			"test should inherit properties from Circle.prototype" : function() {
				assertEquals(12, this.circ.diameter());
			},
			"test constructor is Function when prototype is overridden" : function() {
				function circle() {
				}
				circle.prototype = {};
				assertEquals(Function, circle.constructor);
			},
			"test should create circle object with function" : function() {

				assertEquals(6, this.circ.radius());
				this.circ.radius(12);
				assertEquals(12, this.circ.radius());
				assertEquals(24, this.circ.diameter());
			},
			"test a functional and non functional circle give same results" : function() {
				var classicCircle = new Circle(6); // a small benefit of
				// constructors is that you
				// get limited intellisense
				// on object creation
				assertEquals(classicCircle.diameter(), this.circ.diameter());
			}
		});