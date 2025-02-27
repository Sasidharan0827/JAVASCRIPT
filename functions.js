// functions  on js 


function a(){
    return "its ended here";
  }
  console.log(a());

  // the return statement does not able to directly print the value in the screen or console we have to use interaction like console.log  or  alert 
  
// functions can able to access outer variables too
// the variables declared outside the function  can be acessed inside (global Scope )

let firstname ="zuko";
function  scope(){

    let lastname ="ozai";
    console.log(`Hiii iam ${firstname} ${lastname}`);


}
scope();

//the varible declared inside the function cannot be acessed outside (local scope )
function local_variable(){
    let colour_one="black";
    let colour_two="white";
    console.log(`the flim is in ${colour_one} ${colour_two}`)
}

local_variable();


// we can able to declare a variable with same name and same keyword in both inside and outside function
let dummy="hii";
function variables(){
    let dummy="hello";//variable with the same name 
    console.log(dummy);
}
console.log(dummy);
variables();

// we able to also give like this 

let form ="rocky";
function x(){
    form= "------" +form+"------";
    console.log(form);

}
x();
//function with parameters

function input(name , age){
    value1=name;
    value2=age;
    console.log("name==>"+name+"          "+"age==>"+age);

}
input("zuko",22);


function zedex(name , status="text not given"){
    console.log(name,":",status)

}
zedex( "zuko");

//function with return type 

function z(one, two){
    let sum=one+two;
    return sum;

}
let result=z(5,5);//function call
console.log("Sum of 5 + 5:"+result);

//the function is empty inside it shows undefined
function empty(){


}
console.log("checking the type of empty function is undefinerd ",empty()==undefined)

//function with empty return also undefined 

function nope(){
    return;
}
console.log("checking the type of nope function undefined",nope()==undefined )

//function statement 
function radom(){

}//this is known as function statement 

//function expression
let fun= function(){};

//Anonymous function : A function without name is known as anonymous functions
// function(){

// } //it will show error as reauiers a function name 


//the ability of functions to used as values is known as first class functions,and we can able to pass it as arguments and return a values is known as first class functions
let key=function rep(val){
   let chech=val;
    if(chech==1){
        let msg="its returning something ";
        return msg;
    }

}
let out=key(1);// the function  rep  cannot be acessed directly 
console.log(out)
