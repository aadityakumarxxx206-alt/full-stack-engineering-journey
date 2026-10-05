// ==================================================
// Day-02 — JavaScript Array Methods
// ==================================================


// ==================================================
// Practice 1 — map()
// ==================================================
// Why did I practice this?
// To understand how map() transforms every
// element and creates a new array.

const numbers = [10, 20, 30, 40, 50];

const doubled = numbers.map(function(number) {
    return number * 2;
});

console.log(doubled);


// ==================================================
// Practice 2 — map() with Arrow Function
// ==================================================
// Why did I practice this?
// To practice the shorter arrow function syntax.

const doubledArrow = numbers.map(number => number * 2);

console.log(doubledArrow);


// ==================================================
// Practice 3 — map() with index
// ==================================================
// Why did I practice this?
// To understand that map() callback can receive
// both the current value and its index.

const resultWithIndex = numbers.map((number, index) => {
    return number + index;
});

console.log(resultWithIndex);


// ==================================================
// Practice 4 — map() with Objects
// ==================================================
// Why did I practice this?
// To extract a specific property from every object.

const users = [
    { name: "Aaditya", age: 18 },
    { name: "Rahul", age: 20 },
    { name: "Aman", age: 17 },
    { name: "Vikas", age: 25 }
];

const ages = users.map(function(user) {
    return user.age;
});

console.log(ages);


// ==================================================
// Practice 5 — filter()
// ==================================================
// Why did I practice this?
// To understand how filter() keeps only the
// elements that satisfy a condition.

const adultNumbers = numbers.filter(function(number) {
    return number >= 30;
});

console.log(adultNumbers);


// ==================================================
// Practice 6 — filter() with Objects
// ==================================================
// Why did I practice this?
// To filter objects using one of their properties.

const adultUsers = users.filter(function(user) {
    return user.age >= 18;
});

console.log(adultUsers);


// ==================================================
// Practice 7 — filter() + map()
// ==================================================
// Why did I practice this?
// To practice chaining array methods.
// First filter the users, then extract their names.

const adultNames = users
    .filter(user => user.age >= 18)
    .map(user => user.name);

console.log(adultNames);


// ==================================================
// Practice 8 — reduce() Sum
// ==================================================
// Why did I practice this?
// To understand the accumulator and calculate
// the total of all numbers.

const sumNumbers = [10, 20, 5, 15];

const total = sumNumbers.reduce(function(sum, number) {
    return sum + number;
}, 0);

console.log(total);


// ==================================================
// Practice 9 — reduce() Product
// ==================================================
// Why did I practice this?
// To understand that reduce() can also calculate
// a product instead of a sum.

const productNumbers = [2, 3, 4, 5];

const product = productNumbers.reduce(function(multiply, number) {
    return multiply * number;
}, 1);

console.log(product);


// ==================================================
// Practice 10 — reduce() Total Age
// ==================================================
// Why did I practice this?
// To calculate a value from object properties.

const usersForAge = [
    { name: "Aaditya", age: 18 },
    { name: "Rahul", age: 20 },
    { name: "Aman", age: 17 },
    { name: "Vikas", age: 25 }
];

const totalAge = usersForAge.reduce(function(total, user) {
    return total + user.age;
}, 0);

console.log(totalAge);


// ==================================================
// Practice 11 — reduce() Count Specific Value
// ==================================================
// Why did I practice this?
// To count how many times a specific value
// appears in an array.

const countNumbers = [10, 20, 10, 30, 10, 20];

const countTen = countNumbers.reduce(function(count, number) {

    if (number === 10) {
        return count + 1;
    }

    return count;

}, 0);

console.log(countTen);


// ==================================================
// Practice 12 — reduce() Frequency Counting
// ==================================================
// Why did I practice this?
// To count how many times every different
// value appears in an array.

const frequencyNumbers = [10, 20, 10, 30, 10, 20];

const frequency = frequencyNumbers.reduce(function(count, number) {

    if (count[number]) {
        count[number] = count[number] + 1;
    }
    else {
        count[number] = 1;
    }

    return count;

}, {});

console.log(frequency);


// ==================================================
// Practice 13 — reduce() Multiple Calculations
// ==================================================
// Why did I practice this?
// To use an object as an accumulator and
// calculate multiple values at the same time.

const usersForCalculation = [
    { name: "Aaditya", age: 18 },
    { name: "Rahul", age: 20 },
    { name: "Aman", age: 17 },
    { name: "Vikas", age: 25 }
];

const userStats = usersForCalculation.reduce(function(result, user) {

    result.totalUsers = result.totalUsers + 1;
    result.totalAge = result.totalAge + user.age;

    return result;

}, {
    totalUsers: 0,
    totalAge: 0
});

console.log(userStats);


// ==================================================
// Practice 14 — reduce() Maximum
// ==================================================
// Why did I practice this?
// To find the largest number using reduce().

const maxNumbers = [10, 45, 23, 78, 32, 56];

const maximum = maxNumbers.reduce(function(max, number) {

    if (number > max) {
        return number;
    }

    return max;

}, maxNumbers[0]);

console.log(maximum);


// ==================================================
// Practice 15 — reduce() Minimum
// ==================================================
// Why did I practice this?
// To find the smallest number using reduce().

const minNumbers = [45, 12, 78, 23, 9, 56];

const minimum = minNumbers.reduce(function(min, number) {

    if (number < min) {
        return number;
    }

    return min;

}, minNumbers[0]);

console.log(minimum);


// ==================================================
// Day-02 Final Mental Model
// ==================================================
//
// forEach()
// → Perform an action
//
// map()
// → Transform every element
//
// filter()
// → Keep elements that match a condition
//
// reduce()
// → Combine an array into a final result
//
// map() + filter() + reduce()
// → Powerful data-processing combination