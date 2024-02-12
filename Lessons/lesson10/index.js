let a = 3;

if (a == 1) {
  console.log(" its one");
} else if (a == 2) {
  console.log(" its two");
} else if (a == 3) {
  console.log(" its three");
}

switch (a) {
  case 1:
    console.log(" its one");
    break;
  case 2:
    console.log(" its two");
    break;
  case 3:
    console.log(" its three");
    break;
  default:
    console.log("default");
    break;
}

let num1 = 10;
let num2 = 20;
let action = "+";

switch (action) {
  case "+":
    console.log(`result ${num1 + num2}`);
    break;
  case "-":
    console.log(`result ${num1 - num2}`);
    break;
  case "/":
    console.log(`result ${num1 / num2}`);
    break;
  case "*":
    console.log(`result ${num1 * num2}`);
    break;
  default:
    console.log("unknown operation");
}

let mf = 10;
let sum = 0;

for (let i = 0; i <= mf; i++) {
  sum += i;
}
console.log(sum);
