// ==================================================
// Practice 1 — Object Basics
// ==================================================
// Why did I practice this?
// To understand how to create an object
// and store related data using key-value pairs.

const user = {
    name: "Aaditya",
    age: 18,
    city: "Meerut"
};

console.log(user);


// ==================================================
// Practice 2 — Dot Notation
// ==================================================
// Why did I practice this?
// To understand how to access a specific
// property of an object using dot notation.

console.log(user.name);
console.log(user.age);


// ==================================================
// Practice 3 — Bracket Notation
// ==================================================
// Why did I practice this?
// To understand how to access object properties
// using bracket notation and property names as strings.

console.log(user["city"]);
console.log(user["age"]);


// ==================================================
// Practice 4 — Dynamic Property Access
// ==================================================
// Why did I practice this?
// To understand how to access an object property
// dynamically using a variable.

const property = "age";

console.log(user[property]);


// ==================================================
// Practice 5 — Updating Object Property
// ==================================================
// Why did I practice this?
// To understand how to change the value
// of an existing property inside an object.

user.age = 19;

console.log(user.age);


// ==================================================
// Practice 6 — Adding New Property
// ==================================================
// Why did I practice this?
// To understand how to add a new property
// to an existing object.

user.country = "India";

console.log(user);


// ==================================================
// Practice 7 — Deleting Object Property
// ==================================================
// Why did I practice this?
// To understand how to remove an existing
// property from an object.

delete user.country;

console.log(user);


// ==================================================
// Practice 8 — Nested Object
// ==================================================
// Why did I practice this?
// To understand how an object can contain
// another object and how to access nested data.

const developer = {
    name: "Aaditya",
    skills: {
        frontend: "JavaScript",
        backend: "Node.js"
    }
};

console.log(developer.skills.frontend);
console.log(developer.skills.backend);


// ==================================================
// Practice 9 — Object Method
// ==================================================
// Why did I practice this?
// To understand how a function can be stored
// inside an object and used as a method.

const product = {
    name: "Laptop",
    price: 50000,

    showPrice: function() {
        return this.name + " costs " + this.price;
    }
};

console.log(product.showPrice());


// ==================================================
// Practice 10 — this Inside Object Method
// ==================================================
// Why did I practice this?
// To understand how this refers to the current
// object and allows access to its properties.

const mobile = {
    brand: "Samsung",
    price: 30000,

    getDetails: function() {
        return this.brand + " costs " + this.price;
    }
};

console.log(mobile.getDetails());


// ==================================================
// Practice 11 — Object Destructuring
// ==================================================
// Why did I practice this?
// To understand how to extract properties
// from an object and store them in variables.

const laptop = {
    name: "Dell",
    price: 55000,
    brand: "Dell"
};

const { name, price, brand } = laptop;

console.log(name);
console.log(price);
console.log(brand);


// ==================================================
// Practice 12 — Spread Operator
// ==================================================
// Why did I practice this?
// To understand how to copy properties from
// an existing object into a new object.

const productCopy = {
    ...laptop
};

console.log(productCopy);


// ==================================================
// Practice 13 — Spread + Property Override
// ==================================================
// Why did I practice this?
// To understand how a property can be overridden
// when creating a new object using spread.

const updatedLaptop = {
    ...laptop,
    price: 60000
};

console.log(updatedLaptop);
console.log(laptop);


// ==================================================
// Practice 14 — Rest Operator
// ==================================================
// Why did I practice this?
// To understand how multiple function arguments
// can be collected into an array using rest.

function showNumbers(...numbers) {
    console.log(numbers);
}

showNumbers(10, 20, 30, 40);


// ==================================================
// Practice 15 — Rest + Reduce
// ==================================================
// Why did I practice this?
// To understand how rest collects multiple values
// and reduce combines those values into one result.

function sum(...numbers) {
    return numbers.reduce((total, number) => {
        return total + number;
    }, 0);
}

console.log(sum(10, 20, 30, 40));


// ==================================================
// Practice 16 — Spread vs Rest
// ==================================================
// Why did I practice this?
// To understand the difference between spread
// and rest even though both use the ... syntax.
//
// Spread → spreads existing values.
// Rest   → collects multiple values.

const numbers = [10, 20, 30];

const newNumbers = [...numbers, 40];

console.log(newNumbers);


function collectNumbers(...values) {
    console.log(values);
}

collectNumbers(50, 60, 70);