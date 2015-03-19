function Person(name) {
	this.name = name;
}
Person.prototype = {
	constructor : Person,
	getName : function() {
		return this.name;
	},
	speak : function() {
		return "Hello";
	}
};