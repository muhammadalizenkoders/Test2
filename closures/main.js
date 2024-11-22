// Write a function that uses closures to create a private counter. The counter should have methods to increment, decrement, and retrieve the current value, but the value itself should not be directly accessible.
function createCounter() {
    let count = 0;
    return {
        increment: function () {
            count++;
        },
        decrement: function () {
            count--;
        },
        getValue: function () {
            return count;
        }
    };
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getValue());

// Create a function that generates a list of functions, where each function returns its index in the list.(For example, if the list has three functions, calling the first function should return 0, the second 1, and so on.)
function listfunc() {
    const func = [];
    for (let i = 0; i < 10; i++) {
        func.push(function () {
            return i;
        });
    }
    return func;
}
const list = listfunc();
console.log(list[9]());

// Write a function that creates a timer using closures. The timer should start at 0, increment by 1 every second, and provide a method to pause and resume the timer.
function timer() {
    let count = 0;
    let interval;
    return {
        start: function () {
            interval = setInterval(function () {
                count++;
                console.log(count);
            }, 1000);
        },
        pause: function () {
            clearInterval(interval);
        },
        resume: function () {
            interval = setInterval(function () {
                count++;
                console.log(count);
            }, 1000);
        }
    };
}
const myTimer = timer();
myTimer.start();
setTimeout(function () {
    myTimer.pause();
}, 5000);
setTimeout(function () {
    myTimer.resume();
}, 10000);

// Implement a function that partially applies arguments to another function using closures.(For example, const add5 = partial(add, 5); add5(3) should return 8.)
function partial(func, ...args) {
    return function (...moreargs) {
        return func(...args, ...moreargs);
    };
}
function add(a, b) {
    return a + b;
}
const add5 = partial(add, 5);
console.log(add5);
console.log(add5(3));

