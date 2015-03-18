/* global tddjs */

TestCase("CanAccessUserDefinedPropertiesAndMethodsOfTddjs", {
	"test can access tag property" : function() {
		assertEquals("random string", tddjs.tag);
	}
,
	"test can access hi method  defined outside tddjs body" : function() {
		assertEquals("hi", tddjs.hi());
	}
	,
	"test can access hello method defined inside tddjs body" : function() {
		assertEquals("hello world", tddjs.hello("world"));
	}	
});