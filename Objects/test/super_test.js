TestCase("SuperTest", {
	"test loud person has an UPEERCASE name of person" : function() {
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

		var np = new LoudPerson("Chris");
		assertEquals("CHRIS", np.getName());
		assertEquals("Hello!!!", np.say("Hello"));
	}

});
