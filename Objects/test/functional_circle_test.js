TestCase(
		"Functional CircleTest",
		{
			setUp : function() {

				//Because circle is no longer a constructor, its name is no longer capitalized. To use this new function we omit the new keyword 
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
				//assertEquals(Object(), this.circ.constructor);
				assertEquals(Object, this.circ2.constructor);
			},
			"test should create another object of same kind" : function() {
				var circle = new Circle(6);
				var circle2 = new circle.constructor(9);
				assertEquals(circle.constructor, circle2.constructor);
				assertTrue(circle2 instanceof Circle);
			},
			"test should inherit properties from Circle.prototype" : function() {
				var circle = new Circle(6);
				assertEquals(12, circle.diameter());
			},
			"test constructor is Object when prototype is overridden" : function() {
				function Circle() {
				}
				Circle.prototype = {};
				assertEquals(Object, new Circle().constructor);
			},
			"test should create circle object with function":
				function () {

				  assertEquals(6, this.circ.radius());
				  this.circ.radius(12);
				  assertEquals(12, this.circ.radius());
				  assertEquals(24, this.circ.diameter());
				}
		});