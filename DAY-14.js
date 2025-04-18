// optional changing "?" operator
//while acessing a unreachable object it will shows a error
//by using the operator it shows undefined
//it is the safest way to access the nested object

let obj1 = {
  name: "king koli",
  role: "batsman",
  carrier: {
    total_runs: "1043",
    thirty: "30",
    fifty: "2",
    hunderds: "1",
  },
};
console.log(obj1.carrier?.total_runs);

console.log(obj1.carrier.total_runs);
// when the property exits it behaves the same
console.log(obj1.test?.total_runs); //it shows undefined
console.log(obj1.test.total_runs); //without the optional operator it shows the typeerror


