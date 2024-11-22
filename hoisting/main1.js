// Explain the difference in hoisting behavior between var, let, and const with an example. How would you demonstrate these differences in a real-world use case?

var is hoisted and can accessed before it is declare, but it is initialized with undefined. let and const are also hoisted but are not initialized until the actual declaration is reached. This means you cannot access them before the declaration. const variables cannot be reassigned, but let variables can.
Example:
console.log(x);
var x = 5;
console.log(x); 
console.log(y); 
let y = 10;
console.log(y); 
console.log(z); 
const z = 15;
console.log(z); 

What will the following code output, and why?
console.log(a); undefined
var a = 10;
let b = 20;
console.log(b); 20

// Modify the code so that it doesn’t throw an error or print undefined.
var a = 10;
let b = 20;
console.log(a);
console.log(b);

