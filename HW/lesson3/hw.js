let a = 2;
let c = 3;
let e = 4;
let x = 5;
a = a + x;
console.log(a);
// let sum1 = a ** e;
// let sum2 = c ** x;
let result = a ** e + c ** x;
console.log(`результат ${result}`);
if (result > 2000) {
  console.log("millenium");
} else {
  console.log("boomers");
}
