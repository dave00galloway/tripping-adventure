(function() {
	tddjs.extend = (function() {
		function extend(target, source) {
			tddjs.each(source, function(prop, val) {
				target[prop] = val;
			});
		}
		return extend;
	}());
}());