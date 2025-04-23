// Arrays

let a = []; // this is the syntax to declare the array
let b = new Array(); // it also creates a empty array

let emp = ["rahul", "sasi", "bharath", "naveen", "harish", "kishore"];
console.log(emp.length); // length of the index starts from the 1
console.log(emp[0]); //the index of array starts from 0
console.log(emp);
console.log(emp.push("lokesh")); // adds a new index add this thing at the end of the array
console.log(emp);
console.log(emp.pop()); // it removes the last  elemet from the array
console.log(emp.unshift("sanjay")); // it works opposite to the push
console.log(emp);
console.log(emp.shift("sanjay")); // it is used to remove the first element inthe array,quite opposite to pop
console.log(emp);
console.log(emp.splice(1, 2)); // it slicing the as per the given number according to its starting and ending value
console.log(emp.reverse()); // it is used to reverse the array
console.log(emp.sort()); // it shorted according to the alphabetic order
console.log(emp.indexOf("kishore")); //after shorting the kishore have a index of 1,so it displays the output as 1
console.log(emp.lastIndexOf("kishore")); // it search for the duplicates indexes it means the same valus have repeated for twice means it should give the outputt as second value index
console.log(emp.slice(1, 3)); // it slices the the string from the main string
console.log(emp.join("maari")); // add elements inside the array
console.log(emp.toString()); //converts towards strings
console.log(emp.at(1)); // it is used to fetch the element at the position
console.log(emp.fill(0)); // it rplaces the every avlue with the given value 0
console.log(emp);
console.log(emp.includes(0)); //it checks wheather the "0 " is present in the array or not

// -------------------------------------------------------------------------

let arr = ["rahul", "sasi", "bharath", "naveen", "harish", "kishore"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("-------------------------------------------------------------");
for (i of arr) {
  console.log(i);
}
console.log("-------------------------------------------------------------");
for (let key in arr) {
  console.log(arr[key]);
}
console.log("-------------------------------------------------------------");
