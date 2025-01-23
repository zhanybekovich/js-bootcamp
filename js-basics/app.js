"use strict";

/**
 * Primitive methods
 */

// Round
const price = 99.99;
const roundedPrice = price.toFixed(1);

console.log(roundedPrice);

// To precision
console.log((100.055).toPrecision(4));

// To string
console.log(price.toString());

// Math
console.log(Math);

console.log("======");

// Random
console.log(Math.floor(Math.random() * 10) + 1);

// Abs
console.log(Math.abs(-10));

// Power
console.log(Math.pow(2, 3));

// Sqrt
console.log(Math.sqrt(9));

// Min
console.log(Math.min(1, 2, 3, 4, 5));

const numbers = [1, 2, 3, 4, 5];
console.log(Math.min(...numbers));

// Max
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.max(...numbers));

// Round
console.log(Math.round(1.4));
console.log(Math.round(1.5));
console.log(Math.round(1.6));

// Floor
console.log(Math.floor(1.4));

// Ceil
console.log(Math.ceil(1.4));

// Trunc
console.log(Math.trunc(1.4));

// Convert to number
console.log(Number("123"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(""));

// ParseInt
console.log(parseInt("100px"));

// ParseFloat
console.log(parseFloat("100px"));
