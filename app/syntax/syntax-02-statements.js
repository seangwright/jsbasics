var x, y = 10;

// This if conditional statement is the same as
if (y >= 0) {
    x = y;
} else {
    x = -y;
}

console.log("X from statements = " + x);

// ... this ternary operator expression
x = y >= 0 ? y : -y;

console.log("X from expression = " + x);

// The first is a statement and the second is an expression

// Expressions evaluate to values and statements result in expressions being evaluated