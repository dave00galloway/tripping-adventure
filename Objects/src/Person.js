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

function LoudPerson(name) {
	_super(this, "constructor", name);
}
LoudPerson.inherit(Person);
LoudPerson.prototype.getName = function() {
	return _super(this, "getName").toUpperCase();
};
LoudPerson.prototype.say = function(words) {
	return _super(this, "speak", words) + "!!!";
};