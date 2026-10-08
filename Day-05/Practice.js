// ============================================================
// DAY 5 — JavaScript Array Methods & Method Chaining
// ============================================================
//
// Topics:
// reduce()
// Accumulator
// Current Element
// Initial Value
// Object Accumulator
// Maximum Value with reduce()
// Ternary Operator
// some()
// every()
// Method Chaining
// filter() + map()
// filter() + map() + reduce()
//
// ============================================================


// ============================================================
// DATASET 1 — Products
// ============================================================

const products = [
    {
        name: "Laptop",
        price: 50000
    },
    {
        name: "Phone",
        price: 30000
    },
    {
        name: "Mouse",
        price: 1000
    }
];


// ============================================================
// PRACTICE 1 — reduce() : Total Price
// ============================================================
//
// Task:
// Calculate the total price of all products.
//
// Expected Result:
// 81000
//
// Why did I practice this?
// To understand the basic accumulator pattern in reduce().
// ============================================================

const totalPrice = products.reduce((total, product) => {
    return total + product.price;
}, 0);

console.log("Practice 1 - Total Price:", totalPrice);


// ============================================================
// PRACTICE 2 — reduce() : Total Quantity
// ============================================================
//
// Task:
// Calculate the total quantity of all products.
//
// Why did I practice this?
// To understand how reduce() accesses object properties.
// ============================================================

const productsWithQuantity = [
    {
        name: "Laptop",
        price: 50000,
        quantity: 2
    },
    {
        name: "Phone",
        price: 30000,
        quantity: 3
    },
    {
        name: "Mouse",
        price: 1000,
        quantity: 5
    }
];

const totalQuantity = productsWithQuantity.reduce((total, product) => {
    return total + product.quantity;
}, 0);

console.log("Practice 2 - Total Quantity:", totalQuantity);


// ============================================================
// PRACTICE 3 — reduce() : Total Revenue
// ============================================================
//
// Task:
// Calculate total revenue using:
//
// price × quantity
//
// Expected Result:
// 195000
//
// Why did I practice this?
// To understand calculations using multiple object properties.
// ============================================================

const totalRevenue = productsWithQuantity.reduce((total, product) => {
    return total + (product.price * product.quantity);
}, 0);

console.log("Practice 3 - Total Revenue:", totalRevenue);


// ============================================================
// PRACTICE 4 — Object Accumulator
// ============================================================
//
// Task:
// Create one final object containing:
//
// totalQuantity
// totalRevenue
//
// Expected Result:
//
// {
//     totalQuantity: 10,
//     totalRevenue: 195000
// }
//
// Why did I practice this?
// To understand that the accumulator can also be an object.
// ============================================================

const summary = productsWithQuantity.reduce((total, product) => {

    total.totalQuantity =
        total.totalQuantity + product.quantity;

    total.totalRevenue =
        total.totalRevenue + (product.price * product.quantity);

    return total;

}, {
    totalQuantity: 0,
    totalRevenue: 0
});

console.log("Practice 4 - Object Accumulator:", summary);


// ============================================================
// PRACTICE 5 — Find the Most Expensive Product
// ============================================================
//
// Task:
// Use reduce() to automatically find the product
// with the highest price.
//
// Do NOT hardcode the product name.
//
// Expected Result:
//
// {
//     name: "Laptop",
//     price: 50000
// }
//
// Why did I practice this?
// To understand comparison logic inside reduce().
// ============================================================

const mostExpensive = products.reduce((expensive, product) => {

    return product.price > expensive.price
        ? product
        : expensive;

});

console.log("Practice 5 - Most Expensive:", mostExpensive);


// ============================================================
// PRACTICE 6 — Find the Cheapest Product
// ============================================================
//
// Task:
// Use reduce() to find the product
// with the lowest price.
//
// Expected Result:
//
// {
//     name: "Mouse",
//     price: 1000
// }
//
// Why did I practice this?
// To understand how maximum logic can be reversed
// to find the minimum value.
// ============================================================

const cheapest = products.reduce((cheapest, product) => {

    return product.price < cheapest.price
        ? product
        : cheapest;

});

console.log("Practice 6 - Cheapest:", cheapest);


// ============================================================
// PRACTICE 7 — some()
// ============================================================
//
// Task:
// Check whether at least one product costs
// more than 40000.
//
// Expected Result:
// true
//
// Why did I practice this?
// To understand that some() needs only one matching element.
// ============================================================

const hasExpensiveProduct = products.some((product) => {
    return product.price > 40000;
});

console.log("Practice 7 - Some Product > 40000:", hasExpensiveProduct);


// ============================================================
// PRACTICE 8 — some()
// ============================================================
//
// Task:
// Check whether at least one product costs
// more than 60000.
//
// Expected Result:
// false
//
// Why did I practice this?
// To understand the false case of some().
// ============================================================

const hasVeryExpensiveProduct = products.some((product) => {
    return product.price > 60000;
});

console.log("Practice 8 - Some Product > 60000:", hasVeryExpensiveProduct);


// ============================================================
// PRACTICE 9 — every()
// ============================================================
//
// Task:
// Check whether every product costs more than 900.
//
// Expected Result:
// true
//
// Why did I practice this?
// To understand the difference between some() and every().
// ============================================================

const allAbove900 = products.every((product) => {
    return product.price > 900;
});

console.log("Practice 9 - Every Product > 900:", allAbove900);


// ============================================================
// PRACTICE 10 — every()
// ============================================================
//
// Task:
// Check whether every product costs more than 10000.
//
// Expected Result:
// false
//
// Why did I practice this?
// To understand that one false condition makes every() false.
// ============================================================

const allAbove10000 = products.every((product) => {
    return product.price > 10000;
});

console.log("Practice 10 - Every Product > 10000:", allAbove10000);


// ============================================================
// PRACTICE 11 — filter() + map()
// ============================================================
//
// Task:
// Select products costing more than 10000,
// then create an array containing only their names.
//
// Expected Result:
//
// ["Laptop", "Phone"]
//
// Why did I practice this?
// To understand method chaining.
// ============================================================

const expensiveProductNames = products
    .filter((product) => product.price > 10000)
    .map((product) => product.name);

console.log("Practice 11 - Expensive Product Names:", expensiveProductNames);


// ============================================================
// PRACTICE 12 — filter() + map()
// ============================================================
//
// Task:
// Select products costing more than 10000,
// then create an array containing their prices.
//
// Expected Result:
//
// [50000, 30000]
//
// Why did I practice this?
// To practice selecting data and then transforming it.
// ============================================================

const expensiveProductPrices = products
    .filter((product) => product.price > 10000)
    .map((product) => product.price);

console.log("Practice 12 - Expensive Product Prices:", expensiveProductPrices);


// ============================================================
// DATASET 2 — Products with Quantity
// ============================================================

const storeProducts = [
    {
        name: "Laptop",
        price: 50000,
        quantity: 2
    },
    {
        name: "Phone",
        price: 30000,
        quantity: 3
    },
    {
        name: "Mouse",
        price: 1000,
        quantity: 5
    }
];


// ============================================================
// PRACTICE 13 — filter() + map() + reduce()
// ============================================================
//
// Task:
// 1. Select products costing more than 10000.
// 2. Calculate their total revenue.
// 3. Revenue = price × quantity.
//
// Expected Result:
// 190000
//
// Why did I practice this?
// To combine filtering, transformation/calculation,
// and reduction into one data-processing pipeline.
// ============================================================

const expensiveProductsRevenue = storeProducts
    .filter((product) => product.price > 10000)
    .map((product) => product.price * product.quantity)
    .reduce((total, revenue) => {
        return total + revenue;
    }, 0);

console.log(
    "Practice 13 - Expensive Products Revenue:",
    expensiveProductsRevenue
);


// ============================================================
// PRACTICE 14 — filter() + map()
// ============================================================
//
// Task:
// Select products with quantity greater than 2,
// then return their names.
//
// Expected Result:
//
// ["Phone", "Mouse"]
//
// Why did I practice this?
// To practice chaining with a different condition.
// ============================================================

const highQuantityProducts = storeProducts
    .filter((product) => product.quantity > 2)
    .map((product) => product.name);

console.log(
    "Practice 14 - High Quantity Product Names:",
    highQuantityProducts
);


// ============================================================
// PRACTICE 15 — filter() + reduce()
// ============================================================
//
// Task:
// Select products costing more than 10000,
// then calculate their total quantity.
//
// Expected Result:
// 5
//
// Why did I practice this?
// To understand that reduce() can work on the
// result produced by filter().
// ============================================================

const expensiveProductQuantity = storeProducts
    .filter((product) => product.price > 10000)
    .reduce((total, product) => {
        return total + product.quantity;
    }, 0);

console.log(
    "Practice 15 - Expensive Product Quantity:",
    expensiveProductQuantity
);


// ============================================================
// PRACTICE 16 — Complete Data Processing Pipeline
// ============================================================
//
// Task:
//
// 1. Select products costing more than 10000.
// 2. Calculate revenue for each product.
// 3. Combine all revenues into one final value.
//
// Expected Result:
// 190000
//
// Why did I practice this?
// To understand the complete flow:
//
// filter → select
// map    → transform
// reduce → combine
// ============================================================

const finalRevenue = storeProducts
    .filter((product) => product.price > 10000)
    .map((product) => product.price * product.quantity)
    .reduce((total, revenue) => {
        return total + revenue;
    }, 0);

console.log("Practice 16 - Final Revenue:", finalRevenue);


// ============================================================
// DAY 5 COMPLETE
// ============================================================
//
// Core Mental Model:
//
// forEach() → Perform an action
// map()     → Transform data
// filter()  → Select data
// find()    → Find first match
// some()    → At least one?
// every()   → All?
// reduce()  → Combine
//
// Method Chaining:
//
// filter() → map() → reduce()
//
// ============================================================