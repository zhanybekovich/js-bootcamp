"use strict";

/**
 * Types
 *
 * Primitive types:
 * - string
 * - number
 * - bigInt
 * - boolean
 * - Symbol
 * - undefined
 * - null
 *
 * Object
 */

// Strings
const greeting = "Hello";
console.log(greeting);

const userName = "Alex";
const message = `His name is ${userName}`;
console.log(message);

// Number
const posX = 50;
const posY = -100;
const posZ = 1.55;

const point = ((posX + posY + posZ) * 2) / posX;
console.log(point);

// NaN
console.log("Hello" / 2);

// Infinity
console.log(10 / 0);
console.log(-5 / 0);

// BigInt
// collision
console.log(9900000000000091 + 1);
console.log(9900000000000091 + 2);

// Correct
console.log(9900000000000091n + 1n);
console.log(9900000000000091n + 2n);

// Syntactic sugar
console.log(1_000_000);
console.log(1_00);

// Boolean
const isMarried = true;
console.log(isMarried);

const hasFriends = false;
console.log(hasFriends);

// Null
let data = null;
console.log(data);

// Undefined
let firstName;
console.log(firstName);

// Object
const user = {
  name: "Alex",
  age: 30,
  isMarried: false,
};

// typeof
console.log(typeof isMarried);
console.log(data);

/**
 * Type conversion
 */

// Implicit type conversion: type coercion
console.log(10 + "22");
console.log("18" / "9");

// Explicit type conversion
console.log(Number("10"));
console.log(parseInt("4.6"));
console.log(parseFloat("4.6"));

console.log(String(30));
console.log(String(true));
console.log(String({}));

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean("Hello"));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
