TestCase("FunctionInheritTest", {
	"test should link prototypes" : function() {
		var SubFn = function() {
		};
		var SuperFn = function() {
		};
		SubFn.inherit(SuperFn);
		assertTrue(new SubFn() instanceof SuperFn);
	}
});