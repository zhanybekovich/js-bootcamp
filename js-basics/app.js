"use strict";

/**
 * Objects: copying, joining, destruction
 */

// Objects are not equivalent
const obj1 = { age: 10 };
const obj2 = { age: 0 };

console.log(obj1 === obj2);

// Reference
const obj3 = { name: "Alex" };
const obj4 = obj3;

console.log(obj3 === obj4);

// Checking if objects are equal
const obj5 = {
  name: "Alex",
  age: 20,
};

const obj6 = {
  name: "Alex",
  age: 20,
};

const areObjectsEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

console.log(areObjectsEqual(obj5, obj6));

// Cloning objects

const obj7 = { name: "Alex", age: 20 };

// const obj8 = Object.assign({}, obj7);

// or
const obj8 = { ...obj7 };

// Joining objects
const obj9 = { name: "Alex", age: 20 };
const obj10 = { job: "Developer" };

const user = Object.assign({}, obj9, obj10);
console.log(user);

// Optional chaining

const user2 = {
  name: "John",
  age: 30,
  address: {
    // city: "New York",
    zipCode: 10001,
  },
};

console.log(user2.address?.city);

// Destructuring

const user3 = {
  name: "John",
  age: 30,
  city: "New York",
};

const { name, age } = user3;
console.log(name, age);

// Renaming at destruction
const { name: username } = user3;
console.log(username);

// Default values
const { country = "Unknown" } = user3;

console.log(country);

// Rest operator
const logUser = (user) => {
  const { name, age, city, ...otherInfo } = user;

  console.log(`
    Name: ${name}
    Age: ${age}
    City: ${city}`);

  console.log(otherInfo);
};

logUser({
  name: "John",
  age: 30,
  city: "New York",
  company: "Google",
  country: "USA",
});
