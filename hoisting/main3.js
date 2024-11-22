// // What is the scope of variables declared with var, let, and const when used inside loops? Provide an example that uses hoisting to illustrate your explanation.
var can be used inside loops, but let and const cannot. This is because var is function-scoped, so it is hoisted to the top of the function or global scope, while let and const are block-scoped, so they are not hoisted. For example:
while(1){
    var a = 1;
    let b = 2;
    const c = 3;
    console.log(a,b,c);
    break
}
console.log(a);
console.log(b);
console.log(c);

// How does function expression hoisting differ from function declaration hoisting? Write code to demonstrate the difference.
// Function declarations are hoisted, so they can be called before they are declared. Function expressions are not hoisted, so they must be declared before they are called. For example:
console.log(func1());
function func1() {
    return "func1";
}
console.log(func2());
const func2 = function () {
    return "func2";
}

