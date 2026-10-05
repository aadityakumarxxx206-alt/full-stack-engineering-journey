# Day-02 — JavaScript Array Methods

## Topics Learned

### 1. Functions as Values
- Functions can be stored in variables.
- Functions can be passed as arguments.
- Functions can be returned from other functions.

### 2. Higher-Order Functions
A function that:
- accepts another function as an argument, or
- returns another function.

### 3. Callback Functions
A function passed into another function to be executed later.

### 4. forEach()
Used when we want to perform an action for every element.

### 5. map()
Used when we want to create a new array by transforming every element.

Important points:
- `map()` returns a new array.
- Original array remains unchanged.
- Callback receives `(value, index)`.

### 6. filter()
Used when we want to keep only elements that satisfy a condition.

Important points:
- `filter()` returns a new array.
- Callback must produce a true/false decision.
- Objects can be filtered using their properties.

### 7. map() + filter()
Methods can be chained.

Example:
- First filter users by age.
- Then map the remaining users to their names.

### 8. reduce()
Used to reduce an array into one final result.

Basic structure:

array.reduce((accumulator, currentValue) => {
    return accumulator;
}, initialValue);

Important reduce patterns practiced:

- Sum
- Product
- Total age
- Counting a specific value
- Frequency counting
- Multiple calculations using an object
- Maximum value
- Minimum value

### 9. Accumulator
The accumulator stores the result built during each iteration.

It can be:
- number
- string
- array
- object

### 10. Frequency Counting
Used to count how many times each value appears.

Example result:

{
    10: 3,
    20: 2,
    30: 1
}

### 11. Maximum and Minimum
Using `reduce()`:

Maximum:
- Compare current value with current maximum.
- Replace maximum when current value is larger.

Minimum:
- Compare current value with current minimum.
- Replace minimum when current value is smaller.


## Practice

### Practice 1 — map()
Created a new array by doubling every number.

### Practice 2 — map() with index
Used both the value and index inside `map()`.

### Practice 3 — map() with objects
Created a new array containing only user ages.

### Practice 4 — filter()
Filtered numbers based on a condition.

### Practice 5 — filter() with objects
Filtered users based on their age.

### Practice 6 — filter() + map()
Filtered adult users and then extracted their names.

### Practice 7 — reduce() Sum
Calculated the total of all numbers.

### Practice 8 — reduce() Product
Calculated the product of all numbers.

### Practice 9 — reduce() Object Calculation
Calculated total age from an array of users.

### Practice 10 — reduce() Counting
Counted how many times a specific number appeared.

### Practice 11 — reduce() Frequency Counting
Counted the frequency of every number.

### Practice 12 — reduce() Multiple Calculations
Calculated multiple values using an object accumulator.

### Practice 13 — reduce() Maximum
Found the largest number in an array.

### Practice 14 — reduce() Minimum
Found the smallest number in an array.


## Day-02 Summary

Today I learned how JavaScript array methods work with callback functions.

The main methods practiced were:

- forEach()
- map()
- filter()
- reduce()

I learned that:

- `map()` transforms data.
- `filter()` selects data.
- `reduce()` combines data into a final result.
- These methods can be chained together.
- `reduce()` can use different accumulator types.
- `reduce()` can solve real-world data-processing problems.

## Key Mental Model

map()
→ Transform

filter()
→ Select

reduce()
→ Combine

forEach()
→ Perform an action

## Day-02 Status

Completed:
- Functions as values
- Higher-order functions
- Callbacks
- forEach()
- map()
- filter()
- map() + filter()
- reduce()
- Sum
- Product
- Counting
- Frequency counting
- Object accumulation
- Maximum
- Minimum

Day-02 completed.