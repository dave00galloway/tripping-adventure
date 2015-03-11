Boolean.prototype.not = function() {
	return !this;
};

//This method does not work as expected because the primitive booleans are converted to Boolean objects when used as this. Boolean coercion of an object always produces true, and using the unary logical not operator on true unsur- prisingly results in false. 

TestCase("BooleanTest", {
	"test should flip value of true" : function() {
		assertFalse(true.not());
		assertFalse(Boolean.prototype.not.call(true));
	},
	"test should flip value of false" : function() {
		// Oops! Both fail, false.not() == false
		assertTrue(false.not());
		assertTrue(Boolean.prototype.not.call(false));
	}
});