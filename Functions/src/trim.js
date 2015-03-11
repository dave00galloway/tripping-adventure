if (!String.prototype.trim) {
	console.log("adding");
	throw new Error("adding");
	String.prototype.trim = function trim() {
		return this.replace(/^\s+|\s+$/g, "");
	};
} else {
	console.log("exists");
	throw new Error("exists");
}