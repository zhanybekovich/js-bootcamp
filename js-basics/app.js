"use strict";

/**
 * Functions
 */

// Function declaration
function logHello() {
  console.log("Hello");
}

logHello();
logHello();

// Function parameters
function logHello2(userName) {
  console.log(`Hello, ${userName}!`);
}

logHello2("John");
logHello2("Bob");

// Return value
function calcSumm(a, b) {
  return a + b;
}

const summ1 = calcSumm(2, 2);
console.log(summ1);

const summ2 = calcSumm(30, 507);
console.log(summ2);

// Default params
function calcSumm2(a = 0, b = 0) {
  return a + b;
}

console.log(calcSumm2(10, 89));
