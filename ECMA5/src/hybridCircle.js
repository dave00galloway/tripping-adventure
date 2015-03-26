function HybridCircle(radius) {
	var _radius;
	var circle = Object.create(HybridCircle.prototype, {
		radius : {
			configurable : false,
			enumerable : true,
			set : function(r) {
				if (typeof r != "number" || r <= 0) {
					throw new TypeError("radius should be > 0");
				}
				_radius = r;
			},
			get : function() {
				return _radius;
			}
		}
	});
	circle.radius = radius;
	return circle;
}
HybridCircle.prototype = Object.create(HybridCircle.prototype, {
	diameter : {
		get : function() {
			return this.radius * 2;
		},
		configurable : false,
		enumberable : true
	},
	circumference : { /* ... */},
	area : { /* ... */}
};