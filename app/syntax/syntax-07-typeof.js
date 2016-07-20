// typeof vs instanceof

// use typeof with primitives (think base types)
//  and instance of with (instances of) objects

var x = 10;
var y = 'abc';
var z = false;

console.log("typeof 10 is a number => " + (typeof x === 'number'));

console.log("typeof 'abc' is a string => " + (typeof y === 'string'));

console.log("typeof false is a boolean => " + (typeof z === 'boolean'));

var a = [];
var b = {};
var c = function goodbye() { return 'goodbye'; };

console.log("typeof [] is an object => " + (typeof a === 'object'));

console.log("typeof {} is an object => " + (typeof b === 'object'));

console.log("typeof function () {...} is a function => " + (typeof c === 'function'));

// Weirdos ahead, beware!

var m = undefined;
var n = null;

// This is correct
console.log("typeof undefined is undefined => " + (typeof m === 'undefined'));

// This is not correct but has become a core part of the language
console.log("typeof null is an object => " + (typeof n === 'object'));