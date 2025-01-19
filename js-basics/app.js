"use strict";

/**
 * Loops
 */

// While
let count = 0;

while (count < 10) {
  console.log(count);
  count++;
}

console.log("======");

// Do while
let count2 = 100;

do {
  console.log(count);
  count++;
} while (count < 10);

console.log("======");

// For
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("======");

// Break
for (let i = 1; i < 5; i++) {
  if (i === 3) {
    break;
  }

  console.log(i);
}

console.log("======");

// Continue
for (let i = 1; i < 8; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}
