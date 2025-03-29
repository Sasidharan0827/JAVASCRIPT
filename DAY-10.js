//objects    trying to enter multiple string as a key name

let students_record = {
  sasi: 100,
  vishnu: 90,
  ragul: 80,
  gokul: 70,
};
console.log(students_record);
students_record.karthi = 10;
console.log(students_record);
// students_record."peter ganesh"=20  it shows an error
//alternative for the above staetment si
students_record["peter ganesh"] = 50;
console.log(students_record);
students_record["all pass"] = true;
console.log(students_record);
console.log("all pass value -------------->", students_record["all pass"]);
let all = "all pass";
console.log(students_record[all]);
