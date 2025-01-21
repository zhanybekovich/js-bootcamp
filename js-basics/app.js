"use strict";

/**
 * Objects
 */

const emptyObj = {};
const anotherObj = new Object();

const user = {
  login: "ivan",
  password: "123",
  "registered date": "01.01.2025",

  age: 33,
  isAdult: true,
  job: null,

  address: {
    city: "Bishkek",
    country: "Kyrgyzstan",
  },

  sayHi: function () {
    console.log("Hello!");
  },
};

// Accessing
console.log(user.login);
console.log(user["registered date"]);
console.log(user.address.city);
user.sayHi();

// Adding keys
const user2 = {};

user2.name = "Alex";
user.age = 40;

console.log(user2.name);

// Delete keys
delete user2.age;
console.log(user2);

// Creating objects
const name = "Bob";
const age = 18;

const user3 = {
  name,
  age,
};

console.log(user3);

// Calculated keys
const propName = "age";
const propValue = 20;

const user4 = {
  [propName]: propValue,
};

console.log(user4);

// Checking keys
console.log("age" in user4);
console.log("name" in user4);
console.log(user4.isAdult !== undefined);

console.log("========");

// Loops
const user5 = {
  name: "Pete",
  age: 10,
  isStudent: true,
};

for (const key in user5) {
  console.log(key);
}

console.log("=====");

for (const key in user5) {
  console.log(user5[key]);
}
