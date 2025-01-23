"use strict";

/**
 * String methods
 */

const str = "Hello world!";

// length
console.log(str.length);

// symbol by index
console.log(str[0]);
console.log(str[4]);

// last symbol
console.log(str[str.length - 1]);

// at
console.log(str.at(0));
console.log(str.at(-1));

// toLowerCase
console.log(str.toLowerCase());

// toUpperCase
console.log(str.toUpperCase());

// trim start
console.log(str.trimStart());

// trim end
console.log(str.trimEnd());

// trim
console.log(str.trim());

// index of
console.log(str.indexOf("l"));
console.log(str.indexOf("l", 5));

// includes
console.log(str.includes("l"));
console.log(str.includes("l", 5));

// startsWith
console.log(str.startsWith("Hello"));

// endsWith
console.log(str.endsWith("!"));

// repeat
console.log(str.repeat(3));

// substring
console.log(str.substring(0, 5));
console.log(str.substring(3, 0));

// slice
console.log(str.slice(0, 5));
console.log(str.slice(-3));
console.log(str.slice(-3, -1));

// replace
console.log(str.replace("world", "JavaScript"));
console.log(str.replaceAll("world", "JavaScript"));
console.log(str.replace(/world/g, "JavaScript"));
console.log(str.replace(/world/gi, "JavaScript"));

const str2 = "+996 (555) 555-55-55";
console.log(str2.replace(/\d/g, "*"));

// split
console.log(str2.split(" "));
console.log(str2.split(""));

// challenge
const value = " john smith ";
const clearValue = value.trim().toLowerCase();

if (clearValue.length === 0) {
  console.log("Error! Enter your name");
}

if (clearValue.includes("admin")) {
  console.log("This name is already taken!");
}
