# Day 1 - JavaScript Functions & Fundamentals

## What I Learned

### 1. Function Basics
- **Function Definition:** Creating a reusable block of code to perform a specific task.
- **Function Call:** Executing a defined function by calling its name.
- **Parameters vs Arguments:** Parameters are variable names in function definition, while arguments are actual values passed.

### 2. Execution Engine
- **Call Stack:** A LIFO (Last In, First Out) stack that manages function execution order.
- **Execution Context:** The environment where JavaScript code is evaluated and executed.

### 3. Scope & Scope Chain
- **Global Scope:** Variables accessible from anywhere in the program.
- **Local / Function Scope:** Variables accessible only inside the function where declared.
- **Scope Chain:** Process of searching variables in parent scopes if not found locally.

### 4. Hoisting & Variables
- **Hoisting:** Moving variable and function declarations to top of scope before execution.
- **var, let, const:** `var` is function-scoped, while `let` and `const` are block-scoped.
- **Temporal Dead Zone (TDZ):** Phase where `let`/`const` exist in memory but cannot be accessed before declaration.
- **Shadowing:** Inner scope variable overriding an outer scope variable with the same name.

### 5. Function Types
- **Function Declaration:** Standard function definition that is fully hoisted.
- **Function Expression:** Storing an anonymous function in a variable.
- **Arrow Function:** Modern ES6 shorthand syntax for writing cleaner functions.

### 6. Control Flow
- **return vs console.log():** `console.log()` only prints output to console, while `return` sends data back from function.
- **Return Ends Execution:** A `return` statement stops function execution immediately.
- **Conditional Return:** Returning values dynamically based on `if/else` conditions.

---

## Practice

### Practice 1 — Function + Parameter + Return
Created a function with a parameter and returned a value.

### Practice 2 — Multiple Parameters + Return
Practiced passing multiple arguments and returning a calculated result.

### Practice 3 — Function Calculation
Practiced using parameters to perform calculations inside a function.

### Practice 4 — console.log() inside Function
Practiced the difference between displaying a value with `console.log()` and returning a value.

### Practice 5 — return Stops Execution
Practiced how `return` immediately stops function execution.

### Practice 6 — Multiple Conditions + return
Practiced using `if`, `else if`, and `else` with multiple `return` statements.

## Day 1 Summary

Today I learned how JavaScript functions work,
how execution happens inside functions, and how
scope, hoisting, and return affect the execution
of JavaScript code.