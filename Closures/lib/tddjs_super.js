/*
 * This is unlikely to be faster to call than spelling out the method
 * to call directly, but at least it defeats the worst performance 
 * issue brought on by implementing _super as a method
 */

function _super(object, methodName) {
	var method = object._super && object._super[methodName];
	if (typeof method != "function") {
		return;
	}
	// Remove the first two arguments (object and method)
	var args = Array.prototype.slice.call(arguments, 2);
	// Pass the rest of the arguments along to the super
	return method.apply(object, args);
}