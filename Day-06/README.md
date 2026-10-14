
# Day 06 — JavaScript Array Methods & Data Processing

## Overview

Day 06 focused on processing real-world data using JavaScript array methods. I practiced filtering records, transforming data, calculating totals, sorting values, and finding matching elements.

## Topics Covered

- `filter()`
- `map()`
- `reduce()`
- Method Chaining
- `sort()`
- Sorting Objects by Property
- `some()`
- `find()`
- `find()` vs `filter()`
- Working with Arrays of Objects

## 1. filter()

The `filter()` method creates a new array containing every element that passes a condition.

```js
const prices = [500, 1500, 3000, 5000];

const result = prices.filter((price) => price > 1000);

console.log(result);
// [1500, 3000, 5000]
```

## 2. map()

The `map()` method creates a new array by transforming each element.

```js
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 30000 }
];

const names = products.map((product) => product.name);

console.log(names);
// ["Laptop", "Phone"]
```

## 3. reduce()

The `reduce()` method combines array elements into a single result.

```js
const prices = [500, 1500, 3000];

const total = prices.reduce((sum, price) => sum + price, 0);

console.log(total);
// 5000
```

- `sum` is the accumulator.
- `price` is the current element.
- `0` is the initial accumulator value.

## 4. Method Chaining

Method chaining allows multiple array methods to run sequentially.

```js
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 30000 },
    { name: "Mouse", price: 1000 }
];

const result = products
    .filter((product) => product.price > 10000)
    .map((product) => product.name);

console.log(result);
// ["Laptop", "Phone"]
```

A longer chain can combine `filter()`, `map()`, and `reduce()`.

```js
const total = products
    .filter((product) => product.price > 10000)
    .reduce((sum, product) => sum + product.price, 0);

console.log(total);
// 80000
```

## 5. sort()

The `sort()` method sorts array elements. For numbers, use a comparison function to ensure numeric sorting.

```js
const prices = [450, 120, 900, 300, 50];

prices.sort((a, b) => a - b);
console.log(prices);
// [50, 120, 300, 450, 900]

prices.sort((a, b) => b - a);
console.log(prices);
// [900, 450, 300, 120, 50]
```

- `a - b`: ascending order
- `b - a`: descending order

**Important:** `sort()` modifies the original array.

## 6. Sorting Objects

Objects can be sorted by a property such as `price`.

```js
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 30000 },
    { name: "Mouse", price: 1000 }
];

products.sort((a, b) => b.price - a.price);

console.log(products);
```

This sorts products from highest price to lowest price.

## 7. some()

The `some()` method returns `true` if at least one element passes the condition. Otherwise, it returns `false`.

```js
const prices = [500, 1500, 3000, 5000];

const result = prices.some((price) => price > 2000);

console.log(result);
// true
```

## 8. find()

The `find()` method returns the first element that passes the condition. If no element matches, it returns `undefined`.

```js
const prices = [500, 1500, 3000, 5000];

const result = prices.find((price) => price > 1000);

console.log(result);
// 1500
```

## 9. find() vs filter()

- `find()` returns the first matching element.
- `filter()` returns an array containing all matching elements.
- `some()` returns a Boolean (`true` or `false`).

## Important Notes

- `filter()` selects elements.
- `map()` transforms elements.
- `reduce()` combines elements into a result.
- `sort()` changes the order of the original array.
- `some()` checks whether at least one element matches.
- `find()` returns the first matching element.
- `some()` returns a Boolean, so it cannot be directly chained with array methods such as `filter()`.

## Day 06 Status

Completed: JavaScript array methods, object sorting, and method chaining.

Next: Day 07 — continue the Full-Stack Developer Journey.




# Day 06 — Quick Revision Notes

## Array Methods

### filter()
- Selects all elements that pass a condition.
- Returns a new array.
- Returns an empty array if no element matches.

### map()
- Transforms each element.
- Returns a new array of transformed values.
- The callback's returned value becomes an element in the new array.

### reduce()
- Combines array elements into a single result.
- The accumulator stores the result accumulated so far.
- The initial value sets the starting accumulator value.

### sort()
- Sorts an array.
- `a - b` sorts numbers in ascending order.
- `b - a` sorts numbers in descending order.
- Modifies the original array.

### some()
- Checks whether at least one element passes a condition.
- Returns `true` or `false`.

### find()
- Returns the first element that passes a condition.
- Returns `undefined` if no element matches.

## Method Chaining

Example:

```js
const total = products
    .filter((product) => product.price > 10000)
    .reduce((sum, product) => sum + product.price, 0);
```

Execution flow:

1. `filter()` selects matching products.
2. `reduce()` calculates their total price.

## Key Differences

| Method | Purpose | Return Value |
|---|---|---|
| `filter()` | Select matching elements | Array |
| `map()` | Transform elements | Array |
| `reduce()` | Combine elements | Final result |
| `sort()` | Change element order | Sorted array |
| `some()` | Check for at least one match | Boolean |
| `find()` | Get first matching element | Element or `undefined` |

## Important Reminder

`some()` returns a Boolean, not an array. Therefore, use it separately from array-method chains when you need to check whether a match exists.

`sort()` changes the original array. Use `[...array].sort(...)` when you want to sort a copy instead.
