// Objects are compared by reference

console.log("Two object literals ... are they equal? " + ({} === {}));

var a = {};
var b = {};

console.log("'a' and 'b' are not equal. 'a' === 'b' => " + (a === b));

// Objects are by default very mutable

var person = {
    firstName: 'James',
    lastName: 'Dean'
};

console.log("person's name is " + person.firstName + " " + person.lastName);

person.firstName = "Jimmy";

console.log("person's name is " + person.firstName + " " + person.lastName);

// undefined is not null

console.log("undefined is not null " + (undefined !== null));