function isDivisibleBy(n) {
  let result = "";
  if (n % 2 == 0) {
    result = "fiz";
  }
  if (n % 3 == 0) {
    result += "baz";
  }
  return result;
}
console.log(isDivisibleBy(0));
console.log(isDivisibleBy(8));
console.log(isDivisibleBy(9));
console.log(isDivisibleBy(120));
console.log(isDivisibleBy(7));

////////////////////////////////////////////////////////////////////////////////////

function isDivisibleBy(n) {
  let result = "";
  if (n % 2 == 0) {
    result = "fiz";
  } else if (n % 3 == 0) {
    result = "baz";
  } else if (n % 2 == 0 && n % 3 == 0) {
    result = "fizbaz";
  } else {
    result = "";
  }
  return result;
}
