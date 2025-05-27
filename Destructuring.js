//Normal  Array
let a = ["one ", "twow"];
console.log(a[0], a[1]);
//Array Destruction
let arr = ["John", "Doe"];
let [firstName, surname] = arr; //assigning the value insted of index
console.log(arr);
console.log(firstName); //asscessing the first element of array  using the value
console.log(surname); //asscessing the Second element of array  using the value

let [one, two, three, four] = ["history", "geography", "physics", "science"];
let [five, , seven, eight] = ["hi", "how ", "are", "you"];
console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);
console.log(); // has the how inside the empty sapce but it cant disaply it
console.log(seven);
console.log(eight);

//-------------------------------

//rest ...
let [aa, b, ...rest] = [
  "ee",
  "eee",
  "eeee",
  "eeeee",
  "eeeeee",
  "eeeeeee",
  "eeeeeeee",
];
console.log(rest[3]);
//the unassainable values are collected into the rest
//the word rest can  be replaced by any other words

//objects destructuring
let emp = {
  id: 1,
  name: "sasi",
  address: "xyz",
};
let { id, name, address } = emp;
console.log(address); //we can able to access  the value without the use of key

//// { sourceProperty: targetVariable }

let { id: i, name: nam, address: add } = emp;
console.log(i, nam, add); // acess with the target variable

let sample = {
  msg: "hii",
};
let { greeting = "how are you" } = sample;
console.log(sample);

//restoertaor n objetcs

let dummy = {
  id: 1,
  name: "test",
  address: "Xyz District",
  qaulitication: "Bachelors in Engineering",
};
let { take, ...extra } = dummy; // the remaining values have stored inside the extra
console.log(extra.id);

//the destucuturing cannot be done without the let
// let title, width, height;
// error in this line
// {title, width, height} = {title: "Menu", width: 200, height: 100};

//Nested Destructuring

let nest = {
  general: {
    name: "sasi",
    age: 23,
    address: "salem",
  },
  gender: "male",
  parents: {
    mother: "santha",
    father: "kutty",
  },
};
let { personal, gender, parents } = nest;
console.log(parents);
