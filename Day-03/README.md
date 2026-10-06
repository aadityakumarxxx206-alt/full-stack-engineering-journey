# Day 3 — JavaScript Objects Deep Dive

## 1. Object

An object stores related data in **key-value pairs**.

- **Key** → the name of the property
- **Value** → the value of that property

---

## 2. Dot Notation

Used to access a property of an object:

`object.property`

---

## 3. Bracket Notation

Used to access a property:

`object["property"]`

In bracket notation, the property name is written as a string.

---

## 4. Dynamic Property Access

When the property name is stored in a variable, bracket notation is used.

`object[variable]`

This is called dynamic property access.

---

## 5. Updating an Object

Used to change the value of an existing property:

`object.property = newValue`

---

## 6. Adding a New Property

If a property does not exist and a value is assigned to it, a new property is created.

`object.newProperty = value`

---

## 7. Deleting a Property

Used to remove a property from an object:

`delete object.property`

---

## 8. Nested Objects

An object can contain another object.

This is called a **nested object**.

Nested properties can be accessed through multiple levels.

---

## 9. Object Methods

When the value of an object's property is a function, that function is called a **method**.

`this` can be used inside an object method.

---

## 10. `this`

Inside an object method, `this` generally refers to the object on which the method was called.

`this.property`

This allows access to properties of the same object.

---

## 11. `return` vs `console.log()`

### `return`

- Sends a value back from a function.
- The returned value can be stored or used later.
- Function execution stops after `return`.

### `console.log()`

- Only displays a value in the console.
- Does not send a value back from the function.

**Mental Model:**

`return` → sends a value back

`console.log()` → displays a value

---

## 12. `return` Ends a Function

As soon as `return` is executed, the function ends.

Code written after `return` is not executed.

---

## 13. `undefined`

If a function does not explicitly `return` a value, its return value is `undefined`.

Therefore, a function that only uses `console.log()` can return `undefined`.

---

## 14. Object Destructuring

Object destructuring allows properties to be extracted from an object and stored directly in variables.

Basic syntax:

`const { property1, property2 } = object`

The property names should match.

---

## 15. Spread Operator `...`

The spread operator spreads/copies existing object properties into another object.

Mental model:

**Spread → Expand**

---

## 16. Creating a New Object with Spread

Spread can be used to create a new object from an existing object.

The original object remains separate.

---

## 17. Spread + New Properties

New properties can also be added along with the spread operator.

Order is important because a property written later can override the same property written earlier.

---

## 18. Property Override

If the same property appears twice:

- The first value
- Is replaced by the later value.

**Rule:**

**Later property wins.**

---

## 19. Original Object Remains Unchanged

When a new object is created using spread, the original object is not automatically changed.

Therefore:

**Original object ≠ copied/updated object**

They are separate objects.

---

## 20. Rest Operator `...`

The rest operator collects multiple values/arguments into an **array**.

Mental model:

**Rest → Collect**

---

## 21. Rest Does Not Automatically Add Values

The job of rest is only to collect values.

Rest does not automatically add or calculate numbers.

For calculation, an operation needs to be performed on the collected array.

---

## 22. Rest + Reduce

Arguments collected using rest become an array.

Then `reduce()` can be used on that array to combine:

**Multiple values → One final value**

Flow:

**Arguments → Rest → Array → Reduce → Final Result**

---

## 23. Spread vs Rest

Both use the `...` syntax, but their purpose depends on the context.

| Spread | Rest |
|---|---|
| Expands | Collects |
| Expands existing values | Collects multiple values |
| Used for copying/merging | Used in function parameters |
| Spreads data outward | Collects data inward |

### Golden Rule

**Spread → Expand**

**Rest → Collect**

---

