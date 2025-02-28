//function expressions

const { log } = require("console");

function demo() {
  console.log("heelo");
}
demo();
//this a function declaration

function sample() {
  console.log("this is function expression");
}
let call = sample; //function expression
call();
sample();

//the  function declaration
function sum(a, b) {
  sum = a + b;
  console.log(sum);
}
sum(1, 2);
//function expression
let addition = function (a, b) {
  add = a + b;
  console.log(add);
};
addition(5, 5);
// call back function : the function name passed an argument of other function is known as call back function

function hello(callback) {
  //insted of call back you can write what ever you want
  console.log("hello");
  callback();
}

function goodbyee() {
  console.log("goodbyee");
}
hello(goodbyee);

function good(callback) {
  console.log("angel");
  let fun = function () {
    console.log("Angel is in heaven");
  };
  fun();

  bad();
}
function bad() {
  console.log("devil");
  let sun = function () {
    console.log("devil is in hell");

  };
}
good(bad);
