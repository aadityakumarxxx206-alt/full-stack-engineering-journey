// ==================================================
// Practice 1 — Create an Array of Objects
// ==================================================
// Why did I practice this?
// To understand how real-world data can be
// represented using an array of objects.
//
// Task:
// Create an array containing multiple users.

const users = [
    {
        name: "Aaditya",
        age: 18,
        city: "India"
    },
    {
        name: "Rahul",
        age: 20,
        city: "India"
    },
    {
        name: "Pankaj",
        age: 17,
        city: "Shamli"
    }
];

console.log(users);


// ==================================================
// Practice 2 — Access Object Properties
// ==================================================
// Why did I practice this?
// To understand how to access a property
// from an object inside an array.
//
// Task:
// Print Aaditya's name, Rahul's age,
// and Pankaj's city.

console.log(users[0].name);
console.log(users[1].age);
console.log(users[2].city);


// ==================================================
// Practice 3 — forEach() + Objects
// ==================================================
// Why did I practice this?
// To understand that forEach() gives us
// one complete object at a time.
//
// Task:
// Print every user's name.

users.forEach(function (user) {
    console.log(user.name);
});


// ==================================================
// Practice 4 — map() + Objects
// ==================================================
// Why did I practice this?
// To understand how map() transforms an
// array of objects into a new array.
//
// Task:
// Create an array containing only user names.

const names = users.map(function (user) {
    return user.name;
});

console.log(names);


// ==================================================
// Practice 5 — filter() + Objects
// ==================================================
// Why did I practice this?
// To understand how filter() selects objects
// according to a condition.
//
// Task:
// Select users who are 18 or older.

const adults = users.filter(function (user) {
    return user.age >= 18;
});

console.log(adults);


// ==================================================
// Practice 6 — find() + Objects
// ==================================================
// Why did I practice this?
// To understand how find() searches for
// the first matching object.
//
// Task:
// Find the user whose name is "Rahul".

const result = users.find(function (user) {
    return user.name === "Rahul";
});

console.log(result);


// ==================================================
// Practice 7 — filter() + map()
// ==================================================
// Why did I practice this?
// To understand method chaining.
//
// Task:
// First select users aged 18 or older.
// Then extract only their names.

const adultNames = users
    .filter(function (user) {
        return user.age >= 18;
    })
    .map(function (user) {
        return user.name;
    });

console.log(adultNames);


// ==================================================
// Practice 8 — Object Transformation
// ==================================================
// Why did I practice this?
// To understand that map() can create
// completely new objects.
//
// Task:
// Create a new object for every user
// containing name and isAdult.

const userStatus = users.map(function (user) {
    return {
        name: user.name,
        isAdult: user.age >= 18
    };
});

console.log(userStatus);