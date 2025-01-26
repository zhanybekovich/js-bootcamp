"use strict";

const user = {
  name: "John",
  age: 25,
  city: "New York",
};

const userKeys = Object.keys(user);
console.log(userKeys);

const userValues = Object.values(user);
console.log(userValues);

const userEntries = Object.entries(user);
console.log(userEntries);

userEntries.forEach(([key, value]) => {
  console.log("Key:", key);
  console.log("Value:", value);
});

const formattedUserEntries = userEntries.map(([key, value]) => {
  return [key.toUpperCase(), `--${value}--`];
});

console.log(formattedUserEntries);

const userFormatted = Object.fromEntries(formattedUserEntries);
console.log(userFormatted);

// Map
const data = new Map([
  [1, "Number 1"],
  ["1", "as string 1"],
]);

console.log(data);

// dynamically set values
const data2 = new Map();

data2.set(1, "1 as number");
data2.set("1", "as a string");

console.log(data2);

// get
console.log(data.get(1));
console.log(data.get("1"));

// check
console.log(data.has("1"));
