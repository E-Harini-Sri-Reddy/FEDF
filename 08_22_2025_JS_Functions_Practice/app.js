function walk() {
    console.log("Walk");
}

walk();

// ---------------------------------

function addition(a, b) {
    return a + b;
}

console.log(add(10, 20))

// ---------------------------------

function sayHello() {
  console.log("Hello!");
}
sayHello(); // Output: Hello!

// ---------------------------------

const person = {
  name: "John",
  greet: function () {
    console.log(this.name);
  },
};
person.greet();

// ---------------------------------
// Named function
let slowrun = function run() {
  console.log("Running slowly");
};
slowrun();

// ---------------------------------
// IIFE
(function () {
  console.log("KL Deemed University");
})();

// Generator Functions
function* count() {
  yield 1;
  yield 2;
  yield 3;
}

const counter = count();
console.log(counter.next().value); // Output: 1
console.log(counter.next().value); // Output: 2