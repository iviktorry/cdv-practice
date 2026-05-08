//task 1
class Person {
  constructor(name, age) {
    this.name = this.formateName(name);
    this.age = age;
  }
  formateName(name) {
    //task 4
    return String(name).charAt(0).toUpperCase() + String(name).slice(1);
  }
  setName(value) {
    this.name = this.formateName(value);
  } //task 3
  setAge(value) {
    if (typeof value != "number") {
      throw new TypeError("is NaN");
    }
    if (value < 0) {
      //task 5
      throw new RangeError("is lower than 0");
    }
    this.age = value;
  }
  getName(value) {
    return this.name;
  }
  getAge(value) {
    return this.age;
  }
  toString(name, age) {
    return `${this.name}, ${this.age} years old`;
  }
}

let aPerson = new Person("marek", 25);
console.log(aPerson.toString());
aPerson.name = "dada";
aPerson.age = 19;
console.log(aPerson.toString());

aPerson.setName("vika");

try {
  aPerson.setAge(9);
} catch (error) {
  console.error(error);
}

console.log(aPerson.toString());

// task 2
class Employee extends Person {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }
  toString(name, age, job) {
    return `${super.toString()}, working as a ${this.job}`;
  }
}
let aPerson2 = new Employee("marek", 25, "teacher");
console.log(aPerson2.toString());
aPerson2.name = "dada";
aPerson2.age = 19;
console.log(aPerson2.toString());
