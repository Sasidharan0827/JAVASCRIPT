//reduce function in js

//loop in reduce
let a = [1, 2, 3, 4, 5];
let result = a.reduce((acc, cur) => {
  return console.log(cur);
}, 0);

//addition in reduce
let b = [1, 2, 3, 4, 5];
let result2 = a.reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(" addition in reduce ------->", result2);

// the reduce is only applicable for array
