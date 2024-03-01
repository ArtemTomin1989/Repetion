function zero(a) {
  if (a < 10) {
    return `0${a}`;
  } else {
    return a;
  }
}
console.log(zero(8));
console.log(zero(2888));
