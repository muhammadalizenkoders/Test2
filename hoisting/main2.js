// Write a function that demonstrates hoisting by declaring both a function and a variable with the same name.Explain the output when the function is called.
function hoist() {
    console.log("hoistedfunc");
    var hoist = "hoistedvar";
    console.log(hoist);
}
hoist()

// The function hoist() is hoisted to the top of the scope, so it can be called before it is declared. The variable hoist is also hoisted, but its value is undefined until it is assigned a value. When the function is called, it logs "hoistedfunc" to the console. When the variable hoist is logged, it logs "hoistedvar" to the console, overriding the function declaration with the variable declaration.
