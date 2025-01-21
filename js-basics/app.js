"use strict";

/**
 * Functions
 */

// Function expression
const logHello = function () {
  console.log("Hello");
};

logHello();

// Arrow functions
const getSum = (a, b) => a + b;

const sum1 = getSum(2, 3);
const sum2 = getSum(3, 3);
const totalSum = getSum(sum1, sum2);
console.log(totalSum);

const getSum2 = (a, b) => {
  console.log("Calculating sum...");
  return a + b;
};

console.log(getSum2(30, 45));

// Callback functions
function getUppercaseStr(str) {
  return str.toUpperCase();
}

function printName(str, fn) {
  const formattedStr = fn(str);

  console.log(formattedStr);
}

const userName = "Ivan";

printName(userName, getUppercaseStr);
