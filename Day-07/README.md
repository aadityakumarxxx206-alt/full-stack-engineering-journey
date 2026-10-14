# Day 07 — JavaScript Array Methods and Method Chaining

## 1. Learning Objectives

Today, I practiced working with arrays of objects using JavaScript array methods.

The main objectives were:
- Select elements using filter().
- Transform data using map().
- Calculate totals using reduce().
- Sort strings alphabetically using sort().
- Find the first matching element using find().
- Count elements using length.
- Combine methods through method chaining.

## 2. Understanding Our Dataset

We will use this dataset throughout the lesson.

```js
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 30000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 800 },
  { name: "Monitor", price: 12000 }
];
```

Each product is an object with two properties:
- name: the product name.
- price: the product price.

The products variable stores an array containing five objects.

## 3. filter() — Selecting Data

The filter() method creates a new array containing every element that satisfies a condition.

Example:

```js
const result = products.filter(
  (product) => product.price < 10000
);

console.log(result);
```

Output:

```js
[
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 800 }
]
```

Execution:
1. Laptop: condition is false.
2. Phone: condition is false.
3. Mouse: condition is true.
4. Keyboard: condition is true.
5. Monitor: condition is false.

Only Mouse and Keyboard are included in the new array.

Important:
- filter() returns an array.
- It can return zero, one, or many elements.
- It does not modify the original array.

## 4. map() — Transforming Data

The map() method creates a new array by transforming each element.

Example:

```js
const names = products.map(
  (product) => product.name
);

console.log(names);
```

Output:

```js
["Laptop", "Phone", "Mouse", "Keyboard", "Monitor"]
```

The callback receives each product object. The expression product.name returns the name property.

map() processes every element. It does not select elements based on a condition.

## 5. reduce() — Combining Values

The reduce() method processes array elements and accumulates them into a single result.

Basic syntax:

```js
array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, initialValue);
```

Parameters:
- accumulator: the accumulated result so far.
- currentValue: the current element.
- initialValue: the starting accumulator value.

Example:

```js
const prices = [500, 800];

const total = prices.reduce(
  (sum, price) => sum + price,
  0
);

console.log(total);
```

Output:

```text
1300
```

Step-by-step execution:

| Step | sum | price | New sum |
|---|---:|---:|---:|
| Initial | 0 | — | 0 |
| 1 | 0 | 500 | 500 |
| 2 | 500 | 800 | 1300 |

The final result is 1300.

## 6. reduce() — Example Two: Product Objects

We can also calculate totals from an array of objects.

```js
const total = products.reduce(
  (sum, product) => sum + product.price,
  0
);

console.log(total);
```

Output:

```text
93300
```

Calculation:

50000 + 30000 + 500 + 800 + 12000 = 93300

In each iteration:
- sum stores the running total.
- product represents the current product object.
- product.price gives its price.

The parameter names can be chosen by the developer. However, their positions determine their meanings.

## 7. sort() — Sorting Data

The sort() method sorts array elements.

Alphabetical sorting:

```js
const names = ["Phone", "Laptop", "Monitor"];

names.sort();

console.log(names);
```

Output:

```js
["Laptop", "Monitor", "Phone"]
```

sort() modifies the original array. To preserve the original array, make a copy first:

```js
const sortedNames = [...names].sort();
```

For numeric sorting:

```js
const prices = [3000, 500, 1500];

prices.sort((a, b) => a - b);

console.log(prices);
```

Output:

```js
[500, 1500, 3000]
```

## 8. find() — Finding the First Match

The find() method returns the first element satisfying a condition.

```js
const product = products.find(
  (product) => product.price < 1000
);

console.log(product);
```

Output:

```js
{ name: "Mouse", price: 500 }
```

Mouse is returned because it is the first product whose price is below 1000.

If no element matches, find() returns undefined.

Unlike filter(), find() does not return an array of all matching elements.

## 9. Counting with length

The length property returns the number of elements in an array.

```js
const count = products.filter(
  (product) => product.price < 10000
).length;

console.log(count);
```

Output:

```text
2
```

filter() selects Mouse and Keyboard. length counts the two selected products.

## 10. Method Chaining

Method chaining means calling one method after another on the previous result.

Example: filter() + map()

```js
const result = products
  .filter((product) => product.price > 10000)
  .map((product) => product.name);

console.log(result);
```

Output:

```js
["Laptop", "Phone", "Monitor"]
```

Execution:
1. filter() selects Laptop, Phone and Monitor.
2. map() extracts their names.
3. result stores the final array.

Example: filter() + map() + sort()

```js
const result = products
  .filter((product) => product.price > 10000)
  .map((product) => product.name)
  .sort();

console.log(result);
```

Output:

```js
["Laptop", "Monitor", "Phone"]
```

Example: filter() + reduce()

```js
const total = products
  .filter((product) => product.price > 10000)
  .reduce((sum, product) => sum + product.price, 0);

console.log(total);
```

Output:

```text
92000
```

The selected prices are 50000, 30000 and 12000.

Example: filter() + map() + reduce()

```js
const total = products
  .filter((product) => product.price < 10000)
  .map((product) => product.price)
  .reduce((sum, price) => sum + price, 0);

console.log(total);
```

Output:

```text
1300
```

Execution:
1. filter() selects Mouse and Keyboard.
2. map() produces [500, 800].
3. reduce() adds the two prices.

map() is optional for this particular total because reduce() can add product.price directly. Here, map() is included to practice chaining.

## 11. Common Mistakes

### Comparing the entire object

Incorrect:

```js
products.filter((product) => product > 1000);
```

Correct:

```js
products.filter((product) => product.price > 1000);
```

### Calling map() directly after find()

Incorrect:

```js
products.find((product) => product.price < 1000)
  .map((product) => product.name);
```

find() returns one object, not an array. Use the returned object's name property:

```js
const product = products.find(
  (product) => product.price < 1000
);

console.log(product?.name);
```

### Using inconsistent variable names

Incorrect:

```js
.reduce((sum, product) => total + product.price, 0);
```

Correct:

```js
.reduce((sum, product) => sum + product.price, 0);
```

### Understanding reduce() parameters

The third callback parameter of reduce() is the current index. It is not a special multiplication parameter.

```js
prices.reduce((sum, price, index) => sum + price, 0);
```

## 12. Key Takeaways

- filter() selects matching elements.
- map() transforms each element.
- reduce() accumulates values into one result.
- sort() sorts elements and modifies the original array.
- find() returns the first matching element.
- length counts array elements.
- Method chaining processes one result through multiple methods.

Next: Day 08 — More independent practice with filter(), map() and reduce().
