/* global iterator, tddjs */

TestCase("IteratorTest", {
	"test next should return first item with java-style iterator" : function() {
		var collection = [ 1, 2, 3, 4, 5 ];
		var iterator = tddjs.javastyle.iterator(collection);
		assertSame(collection[0], iterator.next());
		assertTrue(iterator.hasNext());
	},
	"test hasNext should be false after last item with java-style iterator" : function() {
		var collection = [ 1, 2 ];
		var iterator = tddjs.javastyle.iterator(collection);
		iterator.next();
		iterator.next();
		assertFalse(iterator.hasNext());
	},
	"test should loop collection with java-style iterator" : function() {
		var collection = [ 1, 2, 3, 4, 5 ];
		var it = tddjs.javastyle.iterator(collection);
		var result = [];
		while (it.hasNext()) {
			result.push(it.next());
		}
		assertEquals(collection, result);
	},
	"test should loop collection with iterator" : function() {
		var collection = [ 1, 2, 3, 4, 5 ];
		var next = tddjs.iterator(collection);
		var result = [];
		while (next.hasNext) {
			result.push(next());
		}
		assertEquals(collection, result);
	},
	"test next should return first item" : function() {
		var collection = [ 1, 2, 3, 4, 5 ];
		var next = tddjs.iterator(collection);
		assertSame(collection[0], next());
		assertTrue(next.hasNext);
	},
	"test hasNext should be false after last item" : function() {
		var collection = [ 1, 2 ];
		var next = tddjs.iterator(collection);
		next();
		next();
		assertFalse(next.hasNext);
	},	
});