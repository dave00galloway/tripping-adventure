if (!Object.tddjs_create) {
	(function() {
		function F() {
		}
		Object.tddjs_create = function(object) {
			F.prototype = object;
			return new F();
		};
	}());
}
// We create an intermediate constructor like before and assign the object argu-
// ment to its prototype property. Finally we create a new object from the
// intermediate constructor and return it. The new object will have an internal
// [[Prototype]] prop- erty that references the original object, making it
// inherit directly from the object argument. We could also update our
// Function.prototype.inherit func- tion to use this method.
// ES5 codifies the Object.create function, which “creates a new object with a
// specified prototype”. Our implementation does not conform, because it does
// not
// ￼￼￼￼www.it-ebooks.info
// 7.5 Object Composition and Mixins 153 accept an optional properties argument.
// We will discuss this method further in
// Chapter 8, ECMAScript 5th Edition.
