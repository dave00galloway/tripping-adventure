(function() {
	// previous implementation returned a function, this one returns the
	// extended object
	function extend(target, source) {
		target = target || {}; //return an empty object if extending null (or false?)
//		if (!source) {		// not required since ECMA5
//			return target;
//		}

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