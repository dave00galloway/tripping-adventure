TestCase(
		"Extend the Array Object",
		{
			"test arguments should borrow from Array prototype" : function() {
				function addToArray() {
					var args = Array.prototype.slice.call(arguments);
					var arr = args.shift(); // shift is like pop() but removes
											// and
					// returns the first item, so arr is now an
					// empty array (in this test)
					return arr.concat(args);
				}
				var result = addToArray([], 1, 2, 3);
				assertEquals([ 1, 2, 3 ], result);
			},
			"test arguments should borrow explicitly from Array.prototype" : function() {
				function addToArray() {
					arguments.slice = Array.prototype.slice;
					var args = arguments.slice();
					var arr = args.shift();
					return arr.concat(args);
				}
				var result = addToArray([], 1, 2, 3);
				assertEquals([ 1, 2, 3 ], result);
			}
		});