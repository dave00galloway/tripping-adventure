TestCase(
		"ObjectTddjsCreateTest",
		{

			"test sphere should inherit from circle using tddjs_create" : function() {
				var circle = {
					radius : 6,

					area : function() {
						return this.radius * this.radius * Math.PI;
					}
				};
				var sphere = Object.tddjs_create(circle);
				sphere.area = function() {
					return 4 * circle.area.call(this);
				};
				assertEquals(452, Math.round(sphere.area()));
			},

			"test should create more spheres based on existing tddjs_create" : function() {
				var circle = new Circle(6);
				var sphere = Object.tddjs_create(circle);

				sphere.area = function() {
					return 4 * circle.area.call(this);
				};
				var sphere2 = Object.tddjs_create(sphere);
				sphere2.radius = 10;
				assertEquals(1257, Math.round(sphere2.area()));
			},	
			"test sphere should inherit from functional circle using tddjs_create" : function() {
				var circ = new Circle(6);
				var sphere = Object.tddjs_create(circ);
				sphere.area = function() {
					return 4 * circ.area.call(this);
				};
				assertEquals(452, Math.round(sphere.area()));
			}
		});