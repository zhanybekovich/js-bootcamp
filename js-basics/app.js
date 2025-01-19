"use strict";

/**
 * Alert, prompt, confirm, switch
 */

// Alert
// alert("Hello");
// alert(2 + 2);

// Prompt
// const age = prompt("How old are you?", 0);
// console.log(age);

// Confirm
// const isReady = confirm("Are you ready?");

// if (isReady) {
//   console.log("Show starts!");
// } else {
//   console.log("Come back when you are ready!");
// }

// Switch
const age = 18;

switch (age) {
  case 0:
    console.log("Invalid age!");
    break;
  case 18:
    console.log("Show me your passport!");
    break;
  case 1000:
    console.log("Immortal!");
    break;
  default:
    console.log("Input your age");
}

const day = "monday";

switch (day) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log("Work, work, work!");
    break;
  case "saturday":
  case "sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Unknown day!");
}
