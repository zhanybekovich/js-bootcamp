"use strict";

/**
 * Conditionals
 */

const year = 2025;

if (year === 2025) {
  console.log("Hurray!");
} else if (year === 2026) {
  console.log("It's the next year");
} else {
  console.log("It's not 2025");
}

// Ternary operator
const message = year === 2025 ? "Hurray!" : "Not 2025";

console.log(message);

/**
 * Logical operators
 */

// OR
console.log(false || false);
console.log(true || false);
console.log(false || true);
console.log(true || true);

// AND
console.log(false && false);
console.log(true && false);
console.log(false && true);
console.log(true && true);

// NOT
console.log(!true);
console.log(!false);

// Nullish coalescing
const a = null;
const b = 100;

const result = a || b;
const result2 = a ?? b;

console.log(result);
console.log(result2);
