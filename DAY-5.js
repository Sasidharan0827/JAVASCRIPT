//while ,dowhile ,for loops
//  while loop syntax
// while (..)
//{.....};

//do while syntax
//do {
//}
//while(..)


//for loop symtax 
// for(.....){
//}


let x=1;
while(x<=10){
  console.log(x);
  x++;
}


console.log("while loop ends")
let y=1
do{
  console.log(y);
  y++;

}while(y<=10);
console.log("do while ends");


for(i=1;i<=10;i++){
  console.log(i);
  
}
console.log("for loop ends");

//the default keyword is var ,so the "i" inside the for loop takes default keyword as var we can also able to use let .




//break  ,  continue and return 


for (let i=1;i<=10;i++){
  if(i==5){
    break;
  }
  console.log(i)
}
console.log("use of break keyword ");


for(i=1;i<=10;i++){
  if(i==5){
    continue;
    //after the continue keyword the statement below are not get executed 
    
  }
  console.log("value of ",i)

}

console.log("use of continue keyword");




for(i=1;i<=10;i++){
  if(i==5){
    return ;

  }
  console.log("value of ",i);
  
}




//label statetment
//it used to declare a label

// let n=10;

//