
/*
============================================================
DAY 06 — JavaScript Array Methods & Data Processing
============================================================

Topics:
1. filter()
2. map()
3. reduce()
4. Method Chaining
5. sort()
6. Sorting Objects by Property
7. some()
8. find()
9. find() vs filter()

Why did I practice this?
To learn how to process real-world data, select records,
transform values, calculate totals, sort products, and
find matching elements using JavaScript.

============================================================
PRACTICE 1 — Filter Orders by Amount
============================================================
*/

const orders = [
    { customer: "Aaditya", amount: 5000, status: "completed" },
    { customer: "Rahul", amount: 3000, status: "pending" },
    { customer: "Priya", amount: 7000, status: "completed" },
    { customer: "Aman", amount: 2000, status: "completed" }
];

// Task: Select orders with an amount greater than 3000.

const ordersAbove3000 = orders.filter((order) => {
    return order.amount > 3000;
});

console.log("Practice 1:", ordersAbove3000);
// Expected customers: Aaditya, Priya


/*
============================================================
PRACTICE 2 — Filter and Map
============================================================
*/

// Task: Get the names of customers whose order amount
// is greater than 3000.

const customerNames = orders
    .filter((order) => order.amount > 3000)
    .map((order) => order.customer);

console.log("Practice 2:", customerNames);
// Expected: ["Aaditya", "Priya"]


/*
============================================================
PRACTICE 3 — Total Amount Using reduce()
============================================================
*/

// Task: Calculate the total amount of all orders.

const totalOrderAmount = orders.reduce((total, order) => {
    return total + order.amount;
}, 0);

console.log("Practice 3:", totalOrderAmount);
// Expected: 17000


/*
============================================================
PRACTICE 4 — Total Amount of Completed Orders
============================================================
*/

// Task: Select completed orders and calculate their total.

const completedOrderTotal = orders
    .filter((order) => order.status === "completed")
    .reduce((total, order) => total + order.amount, 0);

console.log("Practice 4:", completedOrderTotal);
// Expected: 14000


/*
============================================================
PRACTICE 5 — Sort Numbers in Ascending Order
============================================================
*/

const pricesAscending = [450, 120, 900, 300, 50];

// Task: Sort prices from smallest to largest.

pricesAscending.sort((a, b) => a - b);

console.log("Practice 5:", pricesAscending);
// Expected: [50, 120, 300, 450, 900]


/*
============================================================
PRACTICE 6 — Sort Numbers in Descending Order
============================================================
*/

const pricesDescending = [450, 120, 900, 300, 50];

// Task: Sort prices from largest to smallest.

pricesDescending.sort((a, b) => b - a);

console.log("Practice 6:", pricesDescending);
// Expected: [900, 450, 300, 120, 50]


/*
============================================================
PRACTICE 7 — Sort Objects by Price
============================================================
*/

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 30000 },
    { name: "Mouse", price: 1000 }
];

// Task: Sort products from most expensive to cheapest.

const sortedProducts = [...products].sort(
    (a, b) => b.price - a.price
);

console.log("Practice 7:", sortedProducts);
// Expected order: Laptop, Phone, Mouse


/*
============================================================
PRACTICE 8 — Sort and Map
============================================================
*/

// Task: Sort products from cheapest to most expensive,
// then return only their names.

const sortedProductNames = [...products]
    .sort((a, b) => a.price - b.price)
    .map((product) => product.name);

console.log("Practice 8:", sortedProductNames);
// Expected: ["Mouse", "Phone", "Laptop"]


/*
============================================================
PRACTICE 9 — Sort, Filter, and Map
============================================================
*/

// Task: Sort from most expensive to cheapest,
// select products above 10000, and return their names.

const expensiveProductNames = [...products]
    .sort((a, b) => b.price - a.price)
    .filter((product) => product.price > 10000)
    .map((product) => product.name);

console.log("Practice 9:", expensiveProductNames);
// Expected: ["Laptop", "Phone"]


/*
============================================================
PRACTICE 10 — Filter and Reduce
============================================================
*/

// Task: Calculate the total price of products
// costing more than 10000.

const expensiveProductsTotal = products
    .filter((product) => product.price > 10000)
    .reduce((total, product) => total + product.price, 0);

console.log("Practice 10:", expensiveProductsTotal);
// Expected: 80000


/*
============================================================
PRACTICE 11 — Check with some()
============================================================
*/

// Task: Check whether at least one product costs
// more than 40000.

const hasProductAbove40000 = products.some(
    (product) => product.price > 40000
);

console.log("Practice 11:", hasProductAbove40000);
// Expected: true


/*
============================================================
PRACTICE 12 — Check a Condition with some()
============================================================
*/

// Task: Check whether any product costs more than 60000.

const hasProductAbove60000 = products.some(
    (product) => product.price > 60000
);

console.log("Practice 12:", hasProductAbove60000);
// Expected: false


/*
============================================================
PRACTICE 13 — Find the First Matching Price
============================================================
*/

const numericPrices = [500, 1500, 3000, 5000];

// Task: Find the first price greater than 1000.

const firstMatchingPrice = numericPrices.find(
    (price) => price > 1000
);

console.log("Practice 13:", firstMatchingPrice);
// Expected: 1500


/*
============================================================
PRACTICE 14 — Find an Object
============================================================
*/

// Task: Find the first product costing less than 10000.

const firstCheapProduct = products.find(
    (product) => product.price < 10000
);

console.log("Practice 14:", firstCheapProduct);
// Expected: { name: "Mouse", price: 1000 }


/*
============================================================
PRACTICE 15 — Filter All Matching Objects
============================================================
*/

const productsWithLowPrices = [
    ...products,
    { name: "Keyboard", price: 800 }
];

// Task: Return all products costing less than 10000.

const allCheapProducts = productsWithLowPrices.filter(
    (product) => product.price < 10000
);

console.log("Practice 15:", allCheapProducts);
// Expected: Mouse and Keyboard


/*
============================================================
PRACTICE 16 — Find vs Filter
============================================================
*/

// find() returns the first matching product.

const firstProductBelow10000 = productsWithLowPrices.find(
    (product) => product.price < 10000
);

console.log("Practice 16A:", firstProductBelow10000);
// Expected: Mouse

// filter() returns all matching products.

const everyProductBelow10000 = productsWithLowPrices.filter(
    (product) => product.price < 10000
);

console.log("Practice 16B:", everyProductBelow10000);
// Expected: Mouse and Keyboard


/*
============================================================
FINAL REVISION — DAY 06
============================================================

filter() -> Select matching elements.
map()    -> Transform elements.
reduce() -> Combine elements into a result.
sort()   -> Sort elements.
some()   -> Check whether at least one element matches.
find()   -> Return the first matching element.

Important:
- some() returns true/false, not an array.
- sort() changes the array on which it is called.
- [...products].sort(...) sorts a copy.
- Chaining executes methods from left to right.

============================================================
END OF DAY 06
============================================================
*/
