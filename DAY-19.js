//Iteratables

//Symbol Iteratables

// const myIterable = {
//   *[Symbol.iterator]() {
//     sasi;
//     vishnu;
//     mani;
//   },
// };

// for (const val of myIterable) {
//   console.log(val);
// }

//array iterator

const arr = ["sasi", "vishnu", "ragul", "gokul"];
for (let i of arr) {
  console.log(i);
}
console.log("-------------------------------------------------");
//string iterator

const str = "sasidharan";
for (let j of str) {
  console.log(j);
}
console.log("-------------------------------------------------");

//maps

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the element (the key/value pair) by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count

const emp = new Map();
emp.set("name", "sasi");
emp.set("name2", "vishnu");
console.log(emp.get("name"));
console.log(emp.has("name"));
emp.delete("name");
console.log(emp.has("name"));
console.log(emp.size);
emp.clear(); //---------------------clear the entire set
console.log(emp.size);
// maps iteratable

const stu = new Map([
  ["name", "sasi"],
  ["age", "23"],
  ["address", "salem"],
  ["qulaification", "bachelors in CSE"],
]);

// -------------entire map ioteration
for (let i of stu) {
  console.log(i);
}
// --------------only keys inside the map
for (let i of stu.keys()) {
  console.log(i);
}
//--------------only keys inside the keys
for (let i of stu.values()) {
  console.log(i);
}

// -------------------------set

const dummy = new Set();
let person1 = { name: "sasi", age: 23 };
let person2 = { name: "vishnu" };
let person3 = { name: "ragul" };
let person4 = { name: "sethu" };
let person5 = { name: "selva" };
dummy.add(person1);
dummy.add(person2);
dummy.add(person3);
dummy.add(person4);
dummy.add(person5);
for (let i of dummy) {
  console.log(i);
}
console.log(dummy.has(person1));
console.log(dummy.size);
console.log(dummy.delete(person1));
console.log(dummy.has(person1));

//objects iterations

let obj = {
  name: "sasi",
  age: "23",
  address: "salem",
};
//----------values of obj
console.log("---------values of obj");
for (let i of Object.values(obj)) {
  console.log(i);
}
//----------keys of obj
console.log("----------keys of obj");
for (let i of Object.keys(obj)) {
  console.log(i);
}
