//Methods in primitives

//String

let str = "hello world";
console.log(str.charAt(1)); //the value starts from '0'
console.log(str.charCodeAt(1)); // gives the ascii values
console.log(str.concat(" JS")); // adds at the end of the string
console.log(str.endsWith("!")); //it checks the it ends with "!" and returns the boolean value
console.log(str.startsWith("h")); // it checks the the string starts with given letter and returns a boolean value
console.log(str.indexOf("o")); // it returns the index value
console.log(str.lastIndexOf("o"));
// in hello world it contains two "o" in hello world ,by using the lastindexof () it used to lastly occured "o" index value
console.log(str.match(/o/g));
// it search for the match where the 'o' is present /g is used to find the weather the o is present in multiple times or not
console.log(str.replace("world", "JS"));
//it replaces the world insted of JS
console.log(str.slice(0, 5)); // it displays the word between the index of 0 - 5
console.log(str.substring(1, 4)); //its used to create a sub string from a string
console.log(str.toLowerCase()); //this is used to convert the string to lowercase
console.log(str.toUpperCase()); //this is used to convert the string to uppercase
console.log("hi".repeat(3)); // the repeat is used to repeat the string of the multiple types
let space = "          hi           ";
console.log(space.trim()); // it removes the unwanted white space in the front and backside of the word
let sample = "sasik,vishnu";
console.log(sample.split(",")); //if we have two or more words in a strings with quotes

// Number

let num = 3;
console.log(num.toFixed(2)); // it is used to display two numbers after the decimal point and it be ruound of the  number
console.log(num.toPrecision(4)); // the number should have four digits as we declare
console.log(num.toString());
console.log(num.valueOf());
let x = 2;
console.log(x.toExponential(2)); //this works similar to the **

//boolean

// Method	Example	Description
// toString()	bool.toString()	Converts to "true" / "false"
// valueOf()	bool.valueOf()	Gets primitive boolean value
let a = true;
console.log(a.toString());
console.log(a.valueOf());
