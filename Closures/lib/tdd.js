/*jslint indent: 2, onevar: false, plusplus: false, eqeqeq: false, nomen: false*/
var tddjs = (function namespace() {
	function namespace(string) {
		var object = this;
		var levels = string.split(".");

		for (var i = 0, l = levels.length; i < l; i++) {
			if (typeof object[levels[i]] == "undefined") {
				object[levels[i]] = {};
			}
			object = object[levels[i]];
		}
		return object;
	}
	function hello(name) {
		return "hello " + name;
	}
	return {
		hello : hello
	};
	return {
		namespace : namespace
	};
}());

tddjs.tag = "random string";

tddjs.hi = function hi() {
	return "hi";
};

(function() {
	var dom = tddjs.namespace("dom");

	function addClassName(element, cName) {
		var regexp = new RegExp("(^|\\s)" + cName + "(\\s|$)");

		if (element && !regexp.test(element.className)) {
			cName = element.className + " " + cName;
			element.className = cName.replace(/^\s+|\s+$/g, "");
		}
	}

	function removeClassName(element, cName) {
		var r = new RegExp("(^|\\s)" + cName + "(\\s|$)");

		if (element) {
			cName = element.className.replace(r, " ");
			element.className = cName.replace(/^\s+|\s+$/g, "");
		}
	}

	dom.addClassName = addClassName;
	dom.removeClassName = removeClassName;
}());

(function() {
	var dom = tddjs.namespace("dom");
	var _addEventHandler;
	if (!Function.prototype.call) {
		return;
	}
	function normalizeEvent(event) {
		event.preventDefault = function() {
			event.returnValue = false;
		};
		event.target = event.srcElement;
		// More normalization
		return event;
	}
	if (tddjs.isHostMethod(document, "addEventListener")) {
		_addEventHandler = function(element, event, listener) {
			element.addEventListener(event, listener, false);
		};
	} else if (tddjs.isHostMethod(document, "attachEvent")) {
		_addEventHandler = function(element, event, listener) {
			element.attachEvent("on" + event, function() {
				var event = normalizeEvent(window.event);
				listener.call(element, event);
				return event.returnValue;
			});
		};
	} else {
		return;
	}
	dom.addEventHandler = _addEventHandler;
}());

tddjs.isOwnProperty = (function() {
	var hasOwn = Object.prototype.hasOwnProperty;

	if (typeof hasOwn == "function") {
		return function(object, property) {
			return hasOwn.call(object, property);
		};
	} else {
		// Provide an emulation if you can live with possibly
		// inaccurate results
	}
}());

tddjs.each = (function() {
	// Returns an array of properties that are not exposed
	// in a for-in loop
	function unEnumerated(object, properties) {
		var length = properties.length;

		for (var i = 0; i < length; i++) {
			object[properties[i]] = true;
		}

		var enumerated = length;

		for ( var prop in object) {
			if (tddjs.isOwnProperty(object, prop)) {
				enumerated -= 1;
				object[prop] = false;
			}
		}

		if (!enumerated) {
			return;
		}

		var needsFix = [];

		for (i = 0; i < length; i++) {
			if (object[properties[i]]) {
				needsFix.push(properties[i]);
			}
		}

		return needsFix;
	}

	var oFixes = unEnumerated({}, [ "toString", "toLocaleString", "valueOf",
			"hasOwnProperty", "isPrototypeOf", "constructor",
			"propertyIsEnumerable" ]);

	var fFixes = unEnumerated(function() {
	}, [ "call", "apply", "prototype" ]);

	if (fFixes && oFixes) {
		fFixes = oFixes.concat(fFixes);
	}

	var needsFix = {
		"object" : oFixes,
		"function" : fFixes
	};

	return function(object, callback) {
		if (typeof callback != "function") {
			throw new TypeError("callback is not a function");
		}

		// Normal loop, should expose all enumerable properties
		// in conforming browsers
		for ( var prop in object) {
			if (tddjs.isOwnProperty(object, prop)) {
				callback(prop, object[prop]);
			}
		}

		// Loop additional properties in non-conforming browsers
		var fixes = needsFix[typeof object];

		if (fixes) {
			var property;

			for (var i = 0, l = fixes.length; i < l; i++) {
				property = fixes[i];

				if (tddjs.isOwnProperty(object, property)) {
					callback(property, object[property]);
				}
			}
		}
	};
}());
