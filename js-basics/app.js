"use strict";

const user = {
  name: "Alex",
  age: 25,
  city: "New York",
  address: {
    street: "45, Broadway",
    zipcode: 123456,
  },
  todos: ["sleep", "eat", "work", "train"],
  hasCat: true,
  yacht: null,
};

// const userDataAsString = user.toString();
// console.log(userDataAsString);

const userDataAsString = JSON.stringify(user);
console.log(userDataAsString);

console.log("======");

const parsedUserData = JSON.parse(userDataAsString);
console.log(parsedUserData);

console.log("======");
