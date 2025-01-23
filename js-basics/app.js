"use strict";

/**
 * this
 */

console.log("Global this: ", this);

function foo() {
  console.log("this in foo: ", this);
}

foo();

console.log("==========");

const user = {
  name: "Bob",
  age: 20,
  logThis: function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
  },

  address: {
    city: "New York",
    zipCode: "12345",
    logInnerThis: function () {
      console.log(`I live in ${this.city} with the zip code ${this.zipCode}`);
    },
  },
};

user.logThis();
user.address.logInnerThis();

console.log("==========");
