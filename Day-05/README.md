# Day 5 — JavaScript Array Methods & Method Chaining

## 1. `reduce()`

`reduce()` is used to **combine multiple elements of an array into a single final result**.

The main concepts inside `reduce()` are:

- **Accumulator** — the result accumulated so far
- **Current Element** — the element currently being processed
- **Initial Value** — the starting value of the accumulator

### Mental Model

```text
Array
  ↓
Process elements one by one
  ↓
Accumulate the result
  ↓
Final result
```

---

## 2. Accumulator

The **accumulator** stores the result accumulated during the `reduce()` process.

Its value can change after every iteration.

```text
Initial value
     ↓
First calculation
     ↓
Updated result
     ↓
Next calculation
     ↓
Final result
```

---

## 3. Current Element

The **current element** is the element that `reduce()` is currently processing.

If the array contains objects, the current element can be a complete object.

Therefore, its properties can be accessed using:

```text
currentElement.property
```

---

## 4. Initial Value

The **initial value** determines the starting value of the accumulator.

Common examples:

```text
0  → numerical calculations
{} → object accumulator
[] → array accumulator
```

Choosing the correct initial value is important because it determines the type and starting state of the accumulated result.

---

## 5. Callback Parameter Position

The names of callback parameters are **not fixed**.

However, their roles are determined by their position.

For `reduce()`:

```text
First parameter  → accumulator
Second parameter → current element
```

Meaningful names such as:

```text
total
product
```

make the code easier to understand.

---

## 6. `reduce()` with Objects

When an array contains objects, `reduce()` can work with their properties.

For example, a product object might contain:

```text
name
price
quantity
```

The properties of the current object can then be accessed conceptually as:

```text
product.price
product.quantity
```

---

## 7. Object Accumulator

An accumulator does not have to be a number.

It can also be an **object**.

An object accumulator is useful when we want to maintain multiple pieces of information during one `reduce()` operation.

For example:

```text
totalQuantity
totalRevenue
```

can be maintained inside the same accumulator object.

### Important Concept

There is a difference between:

```text
calculating a value
```

and:

```text
storing that calculated value inside an object property
```

Understanding this difference is important when working with object accumulators.

---

## 8. Finding the Maximum with `reduce()`

`reduce()` can also be used to find the object with the **highest value**.

The basic logic is:

```text
Is the current value greater than the previous maximum?
             ↓
        YES → Keep current value
        NO  → Keep previous maximum
```

The accumulator represents the **best candidate found so far**.

The same concept can also be reversed to find a minimum value.

---

# 9. Ternary Operator

The **ternary operator** selects one of two values based on a condition.

Basic structure:

```text
condition ? valueIfTrue : valueIfFalse
```

Meaning:

```text
Condition is true
→ use valueIfTrue

Condition is false
→ use valueIfFalse
```

### Mental Model

```text
? → If the condition is true

: → If the condition is false
```

It is commonly used for short conditional decisions.

---

# 10. `some()`

`some()` checks whether **at least one element** in an array satisfies a condition.

It always returns:

```text
true
```

or:

```text
false
```

### Mental Model

```text
Does at least one element match?
          ↓
       YES → true
       NO  → false
```

Only one matching element is enough for `some()` to return `true`.

---

## 11. `some()` Callback

In the `some()` callback:

```text
First parameter  → current element
Second parameter → index
```

Unlike `reduce()`, `some()` does **not** use an accumulator.

Its main purpose is to perform a condition check.

---

# 12. `every()`

`every()` checks whether **all elements** in an array satisfy a condition.

It also returns:

```text
true / false
```

### Mental Model

```text
Do all elements match?
        ↓
     YES → true
     NO  → false
```

If even one element fails the condition, `every()` returns `false`.

---

# 13. `some()` vs `every()`

This difference is extremely important:

```text
some()
→ At least one element satisfies the condition

every()
→ All elements satisfy the condition
```

### Easy Memory Trick

```text
some  → at least one
every → all
```

---

# 14. Object Property Access

When an array contains objects, the current element can represent the **entire object**.

For example:

```text
product
```

means the complete object.

While:

```text
product.price
```

means the `price` property of that object.

### Mental Model

```text
product
   ↓
Complete object

product.price
   ↓
Price property
```

This distinction is important when using:

- `filter()`
- `map()`
- `some()`
- `every()`
- `reduce()`

---

# 15. Method Chaining

When one array method is applied to the result of another array method, it is called **method chaining**.

Conceptually:

```text
Array
  ↓
Method 1
  ↓
Method 2
  ↓
Method 3
  ↓
Final Result
```

The result produced by one method becomes the input for the next method.

---

# 16. `filter()` + `map()`

This is one of the most common method-chaining patterns.

```text
filter()
   ↓
Select required data

map()
   ↓
Transform selected data
```

Therefore:

```text
filter → Select
map    → Transform
```

### Conceptual Flow

```text
Original Array
      ↓
    filter()
      ↓
Selected Array
      ↓
     map()
      ↓
Transformed Array
```

---

# 17. `filter()` + `map()` + `reduce()`

These methods can also be combined to perform more advanced data processing.

Conceptual flow:

```text
Original Data
      ↓
   filter()
      ↓
Required Data
      ↓
    map()
      ↓
Transformed Data
      ↓
   reduce()
      ↓
Final Result
```

This pattern is very useful in real-world applications where data needs to be:

**selected → transformed → combined.**

---

# 18. Core Mental Model

Keep this overall model in mind:

```text
forEach()
→ Perform an action

map()
→ Transform data

filter()
→ Select data

find()
→ Find the first matching element

some()
→ Check whether at least one matches

every()
→ Check whether all match

reduce()
→ Combine data into a final result
```

### Important Distinction

```text
map()
→ New transformed array

filter()
→ New selected array

find()
→ First matching element

some()
→ true / false

every()
→ true / false

reduce()
→ One final result
```

---

# Day 5 — Theory Summary

Day 5 covered:

- `reduce()`
- Accumulator
- Current Element
- Initial Value
- Callback Parameter Roles
- Object Accumulator
- Maximum/Minimum Selection Logic
- Ternary Operator
- `some()`
- `every()`
- Object Property Access
- Method Chaining
- `filter()` + `map()` concept
- `filter()` + `map()` + `reduce()` conceptual flow

**Day 5 theory is complete.**