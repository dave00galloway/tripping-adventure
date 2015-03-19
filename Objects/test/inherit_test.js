TestCase("FunctionInheritTest", {
	"test should link prototypes" : function() {
		var SubFn = function() {
		};
		var SuperFn = function() {
		};
		SubFn.inherit(SuperFn);
		assertTrue(new SubFn() instanceof SuperFn);
	},
	"test should set up link to super" : function() {
		var SubFn = function() {
		};
		var SuperFn = function() {
		};
		SubFn.inherit(SuperFn);
		//Note the leading underscore. ECMA-262 defines super as a reserved word intended for future use, so we best not use it. 
		assertEquals(SuperFn.prototype, SubFn.prototype._super);
	}
});