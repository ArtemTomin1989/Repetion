let a = 5;
let b = 3;
let result = 1;
if (a % 2 == 0 && b % 2 == 0) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
} else if (a % 2 !== 0 && b % 2 !== 0) {
  if (a < b) {
    console.log(a);
  } else {
    console.log(b);
  }
} else if (a % 2 !== 0 || b % 2 !== 0) {
  console.log(a ** b);
}
