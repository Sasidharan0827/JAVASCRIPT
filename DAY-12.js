// shallow reference and deep reference
let original = {
  cricket: "bat",
  feilders: {
    batsman: "rohit",
    bowler: "bumrah",
  },
  sub: {
    bowler: "bolt",
  },
};

console.log(original);
console.log(
  "-------------------------------------------------------------------"
);
let clone = Object.assign({}, original); //shallow cloning
console.log(clone);
console.log(
  "-------------------------------------------------------------------"
);
//trying find the shallow clone
clone.cricket = "ball";
console.log(clone);
console.log(original);
//the clone only changing
console.log(
  "-------------------------------------------------------------------"
);
clone.feilders.batsman = "suriya"; // changing only in clone

clone.sub.bowler = "chakar";
console.log(clone);
console.log(original);
//when it goes for nested object it changed in bot because it have same reference for both

let a = {
  class_advisor: "Ajith kumar",
  students: {
    student_1: "sasi",
    student_2: "rahul",
    student_3: "bharath",
  },
  teachers: {
    maths: "rajini",
    science: "kamal",
    social: "vijay",
  },
};
let b = Object.assign({}, a);
b.class_advisor = "vikram"; //changing in b only
b.teachers.maths = "dhanush"; //changing in b only
b.students.student_1 = "kishore"; //changing in b only
console.log(b);
console.log(a);
//----------------cloning using pre operator
let cintu = {
  name: "hari",
  education: {
    school: "gvt school",
    college: "loyola",
  },
};
let bantu = { ...cintu }; //clone using ...  pre operator
console.log(bantu);
bantu.name = "mari";
console.log(bantu);
bantu.education.school = "svs school";
console.log(bantu); //the changes done in bantu stays bantu itself it does not affect the bantu it means
//  bantu has a seperate refernce and cintu has a seperate reference
console.log(cintu);

//in shallow copy the primitive type string inside the object doesnot get affected

//---------------------------garbage collection--------------------------------------

//mark and sweep algorithm is responsible for memory allocation and memory cleaning
// the mark checks for the referenced items and mak it and sweep delete the unmarked items
//the location is unreachable it have also cleared by the sweep

let sam = ["doctor"];
let ram = ["doctor"];
// both sam and ram sharing the same references array doctor

sam = null;
//the sam is get removed from the reference
//but the ram is still on the reference
ram = null;
//the ram and sam dont have any references so the docter inside the array get terminated
console.log("Sam--->", sam, "Ram--->", ram);

// --------------------------
