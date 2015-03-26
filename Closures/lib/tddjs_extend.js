(function() {
	// previous implementation returned a function, this one returns the
	// extended object
	function extend(target, source) {
		target = target || {};
		tddjs.each(source, function(prop, val) {
			target[prop] = val;
		});
		return target;
	}
	// called during script load only, not during execution
	if (typeof tddjs == "object") {
		tddjs.extend = extend;
	}
}());