var circle = { 
		//Unsurprisingbehaviorofthis
  radius: 6,
  diameter : function () {
        return this.radius *2;
    }
};   

TestCase("CircleTest", {
	"test should implicitly bind to object" : function() {
		assertEquals(12, circle.diameter());

		//change in eclipse
	},
	"test implicit binding to global object" : function() {
		var myDiameter = circle.diameter();
		//assertNaN(myDiameter());

		// don't do this
		//radius = 2;
		circle.radius = 2; // this doesn't work either.
		//TypeError: number is not a function
		assertEquals(4, myDiameter());
	},
	"test explicitly setting this using call": function() {
		assertEquals(10, circle.diameter.call({radius:5}));
	}

});

//watch out for syntax errors in test files. if there are any, the file won't be run and any failing tests won't fail!