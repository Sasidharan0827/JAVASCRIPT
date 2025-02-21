// Type converstios in js 

const { equal } = require("assert");

let value =4;
console.log(typeof value );
 let string_value ="4";
 console.log(typeof string_value )

 value=string_value;
 console.log(typeof value )
//  Here the number four is replaced by the string  value 
// This is known as type converstions in js 

string_value=Number(value);

console.log(typeof string_value)
// its shows the output as number beacause we change the string value as  number typee using the Number()


let num =789;
let yes=true;
console.log( typeof yes)
yes=String(yes);
console.log(typeof yes)
// the boolean value can be converted as a string but the number cannot be convertyed as a string using the String ()

let dummy  =String(num);
console.log(typeof num);

let maths="6"/"3";
console.log(maths);
// when it comes for mathamatical operations the strings are automatically converted to numbers 


let sample=Number("hii this is feb 21  2025 ,tuesday ");
console.log(sample);
// it will shows the output as NAN (Not A Number )

dummy=Number("  456 ");
console.log(dummy);

// string directrly converted to number


dummy=String(dummy);
console.log(dummy);
// Number directly connverted to a string 


dummy=Number(true);
console.log(dummy);
// Boolean is converted to a number 


dummy=Number(false);
console.log(dummy);
// Boolean is converted to a number 



dummy=Number(" ");
console.log(dummy);
// the boolean takes the space as a value

dummy=" ";
dummy=Boolean(dummy)
console.log(typeof dummy ,dummy);
// the boolean takes the space as a value


dummy="0";
dummy=Boolean(dummy)
console.log(typeof dummy, dummy);
// string is converting to boolean

dummy=0;
dummy=Boolean(dummy);
console.log(typeof dummy,dummy);
// Number is converting to boolean

dummy=1;
dummy=Boolean(dummy);
console.log(typeof dummy,dummy);
// Number is converting to boolean

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

console.log("----------------------------------------------------------------------------------------------------------------------")
// Basic math operators 

// The following math operations are supported:

// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,
// Exponentiation **.

let a=8;
let b=3;
let c=a**b;
console.log( " exponent of the a to the power of b is ",c);

console.log(" suare root of  8 is ",8**(1/2));


console.log("1"+ 2);
// in addition of srtring and a number it  the addition operator have act as a concadination operator 



sample_1="40";
sample_2="60";

console.log( " addition is using unary operator ",+sample_1 + +sample_2)

// the unary plus is an alternative of Number (...) it converts the string into numbers and add it 



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// the comparison operators are 
// <,>,<=,>=,!=,==,===


m=2;
n=1;
console.log(m<n);
console.log(m>n);
console.log(m<=n);
console.log(m>=n);
console.log(m!=n);
console.log(1== "1");
// the double equals check the values are equal or not , it doesnot care about the datatypes
console.log(1==="1");
// the triple  equals check the values and datatype  are equal or not .

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// Condition Branching
//Syntax
// if(..){

// }
let year=2025;
let condition =(year==2025);

if(condition){
    console.log("happy New Year");
}
else{
    console.log("happy ending")
}

// we can declare the condition inside the vvariable and we can able to evaluate it 

console.log( 1>2||1<2 && 1<2? "one is greater ":"one is smaller" );

//ternary operator also available is js "?"

let sasi=null;
let rahul=null;
let kishore=null;
let zuko = "prince of fire nation";
console.log(sasi??zuko??kishore??zuko);

//?? this is known as null coalscing op[erator it checks the values are null or undefined . If the value wsa undefined it moves to the next one until it catches true .the first value itself true means it stops there itself .

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

