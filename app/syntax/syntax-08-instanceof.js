// instanceof tell you if a object was created with a constructor or parent of a constructor

function Car() {
    this.type = "Ford";
    this.year = 2016;
}

var x = new Car();

console.log("x is an instance of a Car => " + (x instanceof Car));

console.log("x is an instance of a Function => " + (x instanceof Function));

console.log("x is an instance of a Object => " + (x instanceof Object));

console.log("Car is an instance of a Function => " + (Car instanceof Function));

var y = {};
var z = [];

console.log("{} is an instance of a Object => " + (y instanceof Object));
console.log("[] is an instance of a Array => " + (z instanceof Array));
console.log("[] is an instance of a Object => " + (z instanceof Object));

// Weirdos again! but this time not so weird

console.log("undefined is an instance of a Object => " + (undefined instanceof Object));
console.log("null is an instance of a Object => " + (null instanceof Object));