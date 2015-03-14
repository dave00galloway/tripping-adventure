/*globals TestCase, assertEquals, fibonacci*/
TestCase("FibonacciTest", {
	"test calculate high fib value with memoization" : function() {
		var fibonacciFast = fibonacci.memoize();

		assertEquals(3.5957932520658337e+62, fibonacciFast(300));
	},
	"test calculate high fib value without memoization" : function() {
		//this actually seems to perform better...
		//but 'the book' says it will crash the browser
		//var fibonacciFast = fibonacci.memoize();

		assertEquals(3.5957932520658337e+62, fibonacci(300));
	}
});