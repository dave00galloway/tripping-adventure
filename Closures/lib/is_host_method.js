tddjs.isHostMethod = (function() {
	function isHostMethod(object, property) {
		var type = typeof object[property];
		return type == "function" || (type == "object" && !!object[property])
				|| type == "unknown";
	}
	return isHostMethod;
}());