//object references

let name = {
  user: "sasi",
};
console.log(name);
let details = name; //object reference
console.log(details);
details.age = 22;
console.log(details);
console.log(name);
//when we add the new key to the object reference it also affects the original object

//comparing with reference

console.log(name == details);
console.log(name === details);

//cloning the object
//first create a object

let bio_data = {
  name: "sasi",
  age: 23,
  address: "salem",
};
console.log(bio_data); //this console prints the bio_data
let copy = {};
for (let key in bio_data) {
  copy[key] = bio_data[key];
}
console.log(copy); //this console prints the copy

//another way to clone objects

const student_deatils = {
  name: "sasidharan",
  department: "CSE",
};

// syntax first we have to give the object.assign(destination, place the object needed to be clone )
let second_copy = Object.assign({}, student_deatils);
console.log((second_copy.address = "salem"));
console.log(second_copy);

let bharath = {
  name: "bharath",
  adress: "trichy",
  age: 23,
};

console.log(bharath, "-----------------bharath object");
let sasi = {
  name: "sasi",
  adress: "salem",
  age: 22,
};
console.log(sasi, "-----------------sasi object");
sasi = Object.assign(sasi, bharath);
console.log(sasi, "--------adding brath object to sasi");
// nested cloning

let shoes = {
  canvas: "red",
  sports: {
    runningshoes: "black",
    spikes: "yellow",
    footballboot: "voilet",
  },
};

let shoesColorAvalability = {};
shoesColorAvalability = Object.assign(shoesColorAvalability, shoes);
console.log(shoesColorAvalability);
console.log(shoes);
console.log(shoesColorAvalability.sports.spikes == "yellow");
console.log(shoes == shoesColorAvalability);
console.log(shoes === shoesColorAvalability);
shoes.canvas = "black";
console.log(shoes.canvas);
console.log(shoesColorAvalability.canvas);
//the normal element does not get affected

shoes.sports.spikes = "golden";
console.log(shoes.sports.spikes);
console.log(shoesColorAvalability.sports.spikes);
//but if we changes the nested element it gets changes in both (!important )

//structured clone
let employees = {
  developers: { fullstack: "sasi", front_end: "vishnu" },
  devops: "rahul kannan",
};
console.log(employees);
let attendence = structuredClone(employees);
console.log(attendence);
console.log(employees == attendence);
console.log(employees === attendence);

//trying to changing the nested object

employees.developers.front_end = "vishnu kumar";
console.log(employees);
console.log(attendence);
//the nested object doesnot get affected in cloned  when they are not changed in the original object

employees.developers.fullstack = "sasi dharan";
console.log(employees);
console.log(attendence);
attendence.devops = "gokul kannan";
console.log(attendence);
console.log(employees);
// in the structred clone the change in parent not affects the child as same the change in the child does not affect the parent
