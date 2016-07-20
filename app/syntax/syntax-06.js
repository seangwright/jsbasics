// Undefined and Null!!!

// undefined is not null

console.log("undefined is not null " + (undefined !== null));

var x;

function returnVal(x) {
    console.log("Parameter x = " + x);
}

returnVal(x);

returnVal();

x = 'abc';

console.log("Property 'name' of x = " + x.name);

// null, undefined, false, 0, NaN and '' are all 'falsey'

console.log("null, undefined, false, 0, NaN and '' are all " + ((null || undefined || false || 0 || NaN || '') === true));