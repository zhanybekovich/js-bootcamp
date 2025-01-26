"use strict";

/**
 * Array methods
 */

const names = ["John", "Paul", "George", "Ringo"];

// length
console.log(names.length);

console.log("======");

// destruction
const data = ["John", 29, "New-York", "Mercedes"];
const [name, age] = data;

console.log(name, age);

// ...rest
const [userName, userAge, ...additionalInfo] = data;
console.log(userName, userAge, additionalInfo);

console.log("======");

// forEach
const letters = ["a", "b", "d", "e", "f"];

letters.forEach((element, i) => {
  console.log(element, " = ", i);
});

console.log("======");

// indexOf
const prices = [100, 200, 99, 24];
console.log(prices.indexOf(24));
console.log(prices.indexOf(200, 3));

// lastIndexOf
console.log(prices.lastIndexOf(99));

// includes
console.log(prices.includes(200));

// find
const users = [
  {
    name: "John",
    age: 28,
    city: "New-York",
  },
  {
    name: "Paul",
    age: 30,
    city: "London",
  },
  {
    name: "George",
    age: 29,
    city: "Astana",
  },
  {
    name: "John",
    age: 29,
    city: "Bishkek",
  },
  {
    name: "Mary",
    age: 14,
    city: "New-York",
  },
];

console.log(users.find((user) => user.name === "Mary"));

// filter
console.log(users.filter((user) => user.name === "John"));

const filteredUsers = users.filter(({ city, age }) => {
  return city === "New-York" && age > 25;
});
console.log(filteredUsers);

console.log("======");

// map
const formattedUsers = users.map((user) => {
  return `${user.name} is ${user.age} years old`;
});
console.log(formattedUsers);

// reduce
const ageSum = users.reduce((ageSum, user) => {
  return ageSum + user.age;
}, 0);

console.log("Average age of users is", ageSum / users.length);
