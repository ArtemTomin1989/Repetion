function cheking(a) {
  let result = a ** 2;
  if (a % 2 == 0) {
    return result;
  } else {
    result *= a;
    return result;
  }
}

console.log(cheking(10));
console.log(cheking(5));

let inspect = (a) => {
  let result = a ** 2;
  if (a % 2 == 0) {
    return result;
  } else {
    result *= a;
    return result;
  }
};
console.log(inspect(12));
console.log(inspect(3));
