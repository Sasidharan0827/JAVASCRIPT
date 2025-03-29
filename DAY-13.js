// this keyword
//when we use the "use strict method it behaves differently"
//this keyword behave differently on various circunstances

//scenario -1 this keyword in global scope
// "use strict";
console.log(this); //here this will return empty object if in the case of html it displays the window object

function disp() {
  let a = 1;
  console.log(this);
}

let bunny = {
  name: "bunny",
  age: 20,
  trigger: function shoot() {
    console.log(this);
  },
};
