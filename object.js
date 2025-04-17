let obj = { id: 10, name: "mr X", emp: 10000 };
console.log(obj);

// new object creation
let emp = new Object();
emp.id = 200;
emp.name = "Rahul";
emp.salery = 20000;
console.log(emp);

// call the fuction of the cretion with the help of object?

function Emp(i, n, s) {
  this.id = i;
  this.name = n;
  this.salery = s;
}
const e = new Emp(1, "mukesh", 9999);
console.log(e);
