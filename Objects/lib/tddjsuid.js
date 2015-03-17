(function() {
	//called on script load only
	var id = 0;
	//called whenever the uid method is called (obviously)
	function uid(object) {
		if (typeof object.__uid != "number") {
			object.__uid = id++;
		}
		return object.__uid;
	}
	//called during script load only, not during execution
	if (typeof tddjs == "object") {
		tddjs.uid = uid;
	}
}());