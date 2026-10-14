/*
Day 07 - JavaScript Array Methods Practice

Topics:
1. filter()
2. map()
3. reduce()
4. sort()
5. find()
6. length
7. Method Chaining
*/

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 30000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 800 },
  { name: "Monitor", price: 12000 }
];

// ----------------------------------------
// 1. Filter products priced above 20000
// ----------------------------------------

const expensiveProducts = products.filter(
  product => product.price > 20000
);

console.log("1. Products above 20000:", expensiveProducts);
// Expected: Laptop, Phone


// ----------------------------------------
// 2. Get names of products below 15000
// Using filter() + map()
// ----------------------------------------

const affordableProductNames = products
  .filter(product => product.price < 15000)
  .map(product => product.name);

console.log("2. Names below 15000:", affordableProductNames);
// Expected: ["Mouse", "Keyboard", "Monitor"]


// ----------------------------------------
// 3. Get names of products above 10000
// Sort names alphabetically
// ----------------------------------------

const sortedExpensiveNames = products
  .filter(product => product.price > 10000)
  .map(product => product.name)
  .sort();

console.log("3. Sorted names above 10000:", sortedExpensiveNames);
// Expected: ["Laptop", "Monitor", "Phone"]


// ----------------------------------------
// 4. Count products priced below 10000
// Using filter() + length
// ----------------------------------------

const cheapProductCount = products
  .filter(product => product.price < 10000)
  .length;

console.log("4. Count below 10000:", cheapProductCount);
// Expected: 2


// ----------------------------------------
// 5. Find the first product priced below 1000
// ----------------------------------------

const firstCheapProduct = products.find(
  product => product.price < 1000
);

console.log("5. First product below 1000:", firstCheapProduct);
// Expected: { name: "Mouse", price: 500 }

console.log("5. Product name:", firstCheapProduct?.name);
// Expected: "Mouse"


// ----------------------------------------
// 6. Calculate total price above 10000
// Using filter() + reduce()
// ----------------------------------------

const expensiveTotal = products
  .filter(product => product.price > 10000)
  .reduce((sum, product) => sum + product.price, 0);

console.log("6. Total above 10000:", expensiveTotal);
// Expected: 92000


// ----------------------------------------
// 7. Calculate total price below 10000
// Using filter() + map() + reduce()
// ----------------------------------------

const cheapTotal = products
  .filter(product => product.price < 10000)
  .map(product => product.price)
  .reduce((sum, price) => sum + price, 0);

console.log("7. Total below 10000:", cheapTotal);
// Expected: 1300


// ----------------------------------------
// 8. Double the total price below 10000
// ----------------------------------------

const doubledCheapTotal = products
  .filter(product => product.price < 10000)
  .reduce((sum, product) => sum + product.price, 0) * 2;

console.log("8. Double total below 10000:", doubledCheapTotal);
// Expected: 2600


// ----------------------------------------
// 9. Add 100 to the total price below 10000
// ----------------------------------------

const adjustedCheapTotal = products
  .filter(product => product.price < 10000)
  .reduce((sum, product) => sum + product.price, 0) + 100;

console.log("9. Total below 10000 plus 100:", adjustedCheapTotal);
// Expected: 1400


// ----------------------------------------
// 10. Calculate total price of all products
// Using reduce()
// ----------------------------------------

const allProductsTotal = products.reduce(
  (sum, product) => sum + product.price,
  0
);

console.log("10. Total of all products:", allProductsTotal);
// Expected: 93300


// ----------------------------------------
// 11. Calculate half the total below 10000
// ----------------------------------------

const halfCheapTotal = products
  .filter(product => product.price < 10000)
  .reduce((sum, product) => sum + product.price, 0) / 2;

console.log("11. Half total below 10000:", halfCheapTotal);
// Expected: 650


// ----------------------------------------
// 12. Calculate total for prices between
// 1000 and 40000, inclusive
// ----------------------------------------

const selectedProductsTotal = products
  .filter(product => product.price >= 1000 && product.price <= 40000)
  .reduce((sum, product) => sum + product.price, 0);

console.log("12. Total between 1000 and 40000:", selectedProductsTotal);
// Expected: 42000


// ----------------------------------------
// 13. Sort products by price: low to high
// Use a copy to preserve the original array
// ----------------------------------------

const sortedByPrice = [...products].sort(
  (a, b) => a.price - b.price
);

console.log("13. Products sorted by price:", sortedByPrice);
// Expected order: Mouse, Keyboard, Monitor, Phone, Laptop


// ----------------------------------------
// 14. Get prices of products below 10000
// Using filter() + map()
// ----------------------------------------

const cheapPrices = products
  .filter(product => product.price < 10000)
  .map(product => product.price);

console.log("14. Prices below 10000:", cheapPrices);
// Expected: [500, 800]


// ----------------------------------------
// 15. Find the first product priced below 1000
// and safely print its name
// ----------------------------------------

const foundProduct = products.find(
  product => product.price < 1000
);

console.log("15. Found product:", foundProduct?.name ?? "Not found");
// Expected: "Mouse"


// ----------------------------------------
// End of Day 07 Practice
// ----------------------------------------
