//object primitive converstion
// the object converted to bolean is always true
let empty = {}; //empty object
console.log("Boolean value of objects --------->", Boolean(empty)); //converting object to boolean
console.log("Numeric value of objects ---------->", Number(empty)); //converting objects to number
console.log("String value of objects ----------->", String(empty)); //converting  object  to string

//trying to add two objects
let obj1 = {
  name: "sasi",
  age: 20,
};
let obj2 = {
  name: "vishnu",
  age: 20,
};
console.log("trying to add two two objects ", obj1 + obj2);
// converting object to number using unary plus

let sasi = {};
let vishnu = +sasi; // converting a object to nuber
console.log(+sasi); //directly converting it
console.log(vishnu); // assigning to a variable and converting it a number

//Symbol.toPrimitive
let main = {
  one: "one",
  two: 2,
  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      console.log(typeof this.one);
      return console.log(typeof this.one, this.one);
    }

    if (hint === "number") return this.two;
    return true;
  },
};
console.log(String(main));
console.log(Number(main));

//valueof() is used to convert the value to number
//tostring() is used to convert the value to string

let x = {
  id: 2708,
  emp_name: "sasi",
  toString() {
    return `the convertted string ${x.id}     ${typeof x.id}`;
  },
};
console.log(x.toString());
// --------------------- java script never allow number to start with 0----------------
//---------------------otherwise only 0 will get accepted----------------------------
//---------------------the bionary ,decimal,hexadecimal,octal number starts with 0 will get accepted
let result = x.toString();
console.log(typeof result);
console.log(typeof result.id); // now it has converted to string so it shows undefined
console.log("object to string output", result);
