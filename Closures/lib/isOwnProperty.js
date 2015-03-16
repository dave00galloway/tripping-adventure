tddjs.isOwnProperty = (function() {
	var hasOwn = Object.prototype.hasOwnProperty;
	if (typeof hasOwn == "function") {
		return function(object, property) {
			return hasOwn.call(object, property);
		};
	} else {
		// Provide an emulation if you can live with possibly
		// inaccurate results
	}
}());