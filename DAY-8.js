//Arrow functions
//the arrow functions are always anonymus
let a = () => {
  console.log("Arrow function");
  return;
};
a();

//with parameters
let para = (a, b) => {
  return a + b;
};
console.log(para(1, 2));
//multiline arrow functions
let welcome =
  1 < 18 ? () => console.log("Hello!") : () => console.log("Greetings!");

welcome();

// callback in arrow function
let arrow_one = (msg, callback) => {
  console.log(msg, "function one");
  callback();
};

let arrow_two = () => {
  console.log("the second arrow ");
};
arrow_one("trying to call back", arrow_two);

// try to use call back inside  arrow function
let arrow = () => {
  let inside = (callback) => {
    console.log("the inside function");
    callback();
  };
  let outside = () => {
    console.log("the out side function");
  };
  inside(outside);
};
arrow();
