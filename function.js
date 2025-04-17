// function fun1() {
//   console.log("Ram is a good boy");
//   console.log("Sohan is also Good Boy ");
// }
// fun1();
// fun1();

// fun1();
// fun1();
// fun1();
// fun1();
// fun1();
// fun1();
// fun1();
// fun1();
// fun1();
// fun1();

// function sum(x) {
//   console.log(x * x);
//   //   return;
// }
// sum(10);
// sum(10);
// sum(10);

// sum(10);
// sum(10);

// let a = sum(8);
// console.log(a);

// function hello(massageondispaly = "mera anme shubham hai or apka kaya hai") {
//   console.log(massageondispaly);
// }
// hello();

function sumfo() {
  let sum = 0;
  for (var i = 0; i < arguments.length; i++) sum += arguments[i];
  return sum;
}
let result = sumfo(1, 2, 3, 4, 5, 6);
console.log(result);
