

//switch statement
let a = 2 + 2;

switch (a) {
  case 3:
    console.log( 'Too small' );
    break;
  case 4:
    console.log( 'Exactly!' );
    break;
  case 5:
 console.log( 'Too big' );
    break;
  default:
    console.log( "I don't know such values" );
}


//grouping of case in if statement 

switch (a) {
  case 3:
    console.log( 'Too small' );
    break;
  case 4:
    
  case 5:
    console.log( 'Exactly!' );
    break;
 break;
  default:
    console.log( "I don't know such values" );
}


//setting a value for switch
value=2+2;
switch(value){
    case 1:
        console.log("the given value is one ");
        break;

        case 2:
            console.log("the given value is two")
            brtaek;
            case 3:
                console.log("the given value is three ");
                break;
                case 4:
                    console.log("the given value is four ");
                    break;
                    default:
                        console.log("value does not have any matches here")
}


//label in js
// the label are used to give name for the 
// the, break and return keyword is woking similar the statements after thos e key words does not get executed
//the continue keyword  can allow the execute the statement when the condition in the false state
//loop is the label name for the loop
loop:for(i=0;i<=10;i++){
    for(j=0;j<=10;j++){
        console.log("if loop");
    continue loop;
    console.log("trying to execute someting after the continue  sstatement");

  

    }
  
}

loop:for(i=0;i<=10;i++){
    for(j=0;j<=10;j++){
        console.log("if loop");
    break loop;
  console.log("trying to execute after the break");
    }
  
}

loop:for (i=0;i<=10;i++){
    if(i==0) continue
        
            console.log("use of continue statement ")
        
    }



  for (i=0;i<=0;i++){
    console.log("the use of return keyword");
    return;
    console.log("trying to execute someting after the return sstatement");
    
  }


