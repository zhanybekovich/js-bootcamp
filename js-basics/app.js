/**
 * Classes
 */

class Student {
  planet = "Earth";
  country = "USA";

  // private attr
  #city = null;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  logAge() {
    console.log(this.age);
  }

  // setter
  set city(value) {
    const firstLetter = value[0].toUpperCase();
    const fromSecondLetter = value.slice(1).toLowerCase();
    return (this.#city = `${firstLetter}${fromSecondLetter}`);
  }

  // getter
  get city() {
    return `city: ${this.#city}`;
  }

  // private methods
  #someSecretAction() {
    // ...
  }
}

const firstStudent = new Student("John", 19);
const secondStudent = new Student("Bob", 20);

console.log(firstStudent.name, firstStudent.country);
console.log(secondStudent.name);

console.log("====");

firstStudent.logAge();
secondStudent.logAge();

console.log("====");

// setter
firstStudent.city = "moscow";
console.log(firstStudent.city);

console.log("====");

// inheritance
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log("I'm eating");
  }

  sleep() {
    console.log("I am sleeping");
  }
}

const firstPerson = new Person("John", 20);
console.log(firstPerson);

console.log("========");

class Developer extends Person {
  constructor(name, age, experience) {
    super(name, age);
    this.experience = experience;
  }
  writeCode() {
    console.log("I am coding...");
  }

  // rewrite method
  sleep() {
    console.log("Don't like to sleep! So...");
    this.writeCode();
  }
}

const superCoder = new Developer("Bob", 40, 3);
console.log(superCoder);
superCoder.eat();
superCoder.writeCode();
superCoder.sleep();

console.log("========");

class JSDeveloper extends Developer {
  makeFrontend() {
    console.log("Coding Frontend");
  }

  eat() {
    super.eat();
    console.log("Coding React");
  }
}

const jsHacker = new JSDeveloper("Mary", 18, 20);
console.log(jsHacker.name);
jsHacker.eat();
jsHacker.sleep();
