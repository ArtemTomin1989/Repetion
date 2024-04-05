function dividing(n) {
  let result = "";
  if (n % 2 == 0) result = "fiz";
  if (n % 3 == 0) result += "baz";
  return result;
}
console.log(dividing(0));
console.log(dividing(8));
console.log(dividing(9));
console.log(dividing(120));
console.log(dividing(7));

////////////////////////////////////////////////////////////////////////////////////

function isDivisibleBy(n) {
  let result = "";
  if (n % 2 == 0 && n % 3 == 0) {
    result = "fizbaz";
  } else if (n % 3 == 0) {
    result = "baz";
  } else if (n % 2 == 0) {
    result = "fiz";
  } else {
    result = "";
  }
  return result;
}

console.log(isDivisibleBy(0));
console.log(isDivisibleBy(8));
console.log(isDivisibleBy(9));
console.log(isDivisibleBy(120));
console.log(isDivisibleBy(7));
