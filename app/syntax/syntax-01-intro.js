// Two slashes start single-line comments

var x;  // declaring a variable

var y = 5;

x = 3 + y;  // assigning a value to the variable `x`

foo(x, y);  // calling function `foo` with parameters `x` and `y`

// Notice foo is called before it is declared - hoisting!
function foo(a, b) {
    console.log("Inside foo: " + a + " + " + b + " = " + (a + b));
}

var obj = {}; // creating a new object literal

obj.bar = foo; // assigning function `foo` to property `bar` of `obj`

obj.bar(1, 4);  // calling method `bar` (`foo`) of object `obj`

// A conditional statement
if (x === 0) {  // Is `x` equal to zero?
    x = 123;
} else {
    x = -1;
}

obj.baz = baz; // assign function `baz` to property `baz` of `obj`

var result = obj.baz(x, y); // call `obj.baz` with parameters `x` and `y`
                            // and store the returned value in `result` 

console.log(result); // output `result` to the current console (what is console? it's a global variable)

// Defining function `baz` with parameters `a` and `b`
function baz(a, b) {
    console.log("Inside baz: " + a + " + " + b + " = " + (a + b));
    return a + b;
}