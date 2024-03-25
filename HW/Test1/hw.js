let a = 3;
let b = 2;

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
} else {
  console.log(a ** b);
}
