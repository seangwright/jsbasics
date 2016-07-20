// Primitive values vs objects

// Primitives

var u = true;
var v = 1;
var w = 'hello';
var x = null;
var y = undefined;

// Objects ... everything else

var a = {
    sayHello: function () { console.log("HELLO"); }
};

var b = ['1', 4, [], a];

var c = function (first, second) {
    return second + first;
}

var d = /^a+b+$/;

// The properties of primitives are immutable

var word = 'alphabet';

word.length = 200;

word.newProp = 'A new property value';

console.log("The length of 'alphabet' is " + word.length);
console.log("The value of 'word.newProp' is " + word.newProp);