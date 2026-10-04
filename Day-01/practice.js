// ==================================================
// Practice 1 — Function + Parameter + Return
// ==================================================
// Why did I practice this?
// To understand how to create a function,
// pass a value through a parameter,
// and return a result from the function.

function greet(name) {
    return "Hello " + name;
}

console.log(greet("Aaditya"));


// ==================================================
// Practice 2 — Multiple Parameters + Return
// ==================================================
// Why did I practice this?
// To understand how a function can accept
// multiple parameters and return a calculated result.

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
console.log(add(5, 7));


// ==================================================
// Practice 3 — Function for Calculation
// ==================================================
// Why did I practice this?
// To practice using parameters in a function
// and returning the result of a calculation.

function multiply(a, b) {
    return a * b;
}

console.log(multiply(4, 5));
console.log(multiply(10, 3));


// ==================================================
// Practice 4 — Function + console.log()
// ==================================================
// Why did I practice this?
// To understand the difference between
// console.log() and return inside a function.

function greetGuest(name) {
    console.log("Hello " + name);
}

greetGuest("Aaditya");


// ==================================================
// Practice 5 — return Stops Function Execution
// ==================================================
// Why did I practice this?
// To understand that return gives a value back
// and immediately stops the function execution.
// Code after return will not execute.

function checkNumber(number) {
    if (number > 0) {
        return "Positive";
    }

    console.log("This will not run");
}

console.log(checkNumber(10));


// ==================================================
// Practice 6 — Multiple Conditions + return
// ==================================================
// Why did I practice this?
// To practice using if / else if / else
// with multiple return statements.
// Each condition returns a different result.

function calculateGrade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 75) {
        return "B";
    }
    else if (score >= 60) {
        return "C";
    }
    else {
        return "Fail";
    }
}

console.log(calculateGrade(50));