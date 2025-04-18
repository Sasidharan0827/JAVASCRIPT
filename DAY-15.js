//symbol
//the symbol is introtduce in es6
//the symbol is always  unique
let symbol1 = Symbol("one");
console.log("the output", symbol1);

// the symbol is immutable
// its no itteratable
//it can be added to global symbol registery
//we can avoid name colloisions
//we can hide the details

//example of hiding details
const hide = Symbol.for("secert");

let dummy = {
  visible: "this is visioble ",
  [hide]: "it a magic",
};
console.log(dummy.visible);
console.log([hide]); // without any object referencing it does not shows any values
console.log(dummy[hide]); // with referencing a object it shows the details

//symbol with the same declaration is unique

let sym1 = Symbol("description");
let sym2 = Symbol("description");
console.log(sym1 === sym2);
console.log(sym1 == sym2);
// the output iteslf it has been unique

// symbol global registration
let globalsym1 = Symbol.for("symbol");
let globalsym2 = Symbol.for("symbol");
console.log(
  " the comparision of the symbols using global registry--->",
  globalsym1 === globalsym2
);
//here it will be true because it has the symbol for globally and its using the symbol again
//it does not create the symbol for second time
//for the second time it uses the alredy created the symbol

let zayan = Symbol.for("two");
let obj = {
  one: "1",
  [zayan]: "2",
  three: "3",
};
console.log([zayan]);
console.log(obj[zayan]);

//for assigning a value to symbol  we use Symbol.key
//for fetcjhing the value of the key we guys use Symbol.KeyFor

let color = Symbol.for("red");
console.log(Symbol.keyFor(color));
//this is only way to see the key value in symbol
