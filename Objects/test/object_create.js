TestCase(
		"ObjectCreateTest",
		{
			// create now appears to be a core funtion in JS. when running in
			// netbeans it lives in
			// "/Applications/NetBeans/NetBeans
			// 8.0.2.app/Contents/Resources/NetBeans/ide/jsstubs/corestubs.zip:jsstubs/stub_CORE_Object.js"
			// also works running in eclipse too
			"test sphere should inherit from circle using ecma5 create" : function() {
				var circle = {
					radius : 6,

					area : function() {
						return this.radius * this.radius * Math.PI;
					}
				};
				var sphere = Object.create(circle);
				sphere.area = function() {
					return 4 * circle.area.call(this);
				};
				assertEquals(452, Math.round(sphere.area()));
			},

			"test should create more spheres based on existing ecma5 create" : function() {
				var circle = new Circle(6);
				var sphere = Object.create(circle);

				sphere.area = function() {
					return 4 * circle.area.call(this);
				};
				var sphere2 = Object.create(sphere);
				sphere2.radius = 10;
				assertEquals(1257, Math.round(sphere2.area()));
			},
			//the following 3+ tests show that you can use the functional pattern along with ecma5 Object.create() to
			// form simple clear and re-usable inheritance pattern without interference worries
			"test sphere should inherit from functional circle using ecma5 create" : function() {
				var circ = circle(6);
				var sphere = Object.create(circ);
				sphere.area = function() {
					return 4 * circ.area.call(this);
				};
				assertEquals(452, Math.round(sphere.area()));
			},

			"test created sphere should inherit from functional circle using ecma5 create" : function() {
				var sphere = create_sphere(6);
				assertEquals(452, Math.round(sphere.area()));
			},
			"test created sphere diameter should inherit from functional circle diameter using ecma5 create" : function() {
				var sphere = create_sphere(6);
				assertEquals(12, sphere.diameter());
			},
			
			"test multiple spheres don't interfere with each other using ecma5 create" : function() {
				var sphere1 = create_sphere(6);
				var sphere2 = create_sphere(7);
				var sphere3 = create_sphere(8);
				var sphere4 = Object.create(sphere1);
				assertEquals(452, Math.round(sphere1.area()));
				assertEquals(616, Math.round(sphere2.area()));
				assertEquals(804, Math.round(sphere3.area()));
				assertEquals(452, Math.round(sphere4.area()));
			},
		});