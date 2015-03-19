TestCase("SuperTest", {
	"test loud person has an UPEERCASE name of person" : function() {
		var np = new LoudPerson("Chris");
		assertEquals("CHRIS", np.getName());
		assertEquals("Hello!!!", np.say("Hello"));
	}

});
