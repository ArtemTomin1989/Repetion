function zero(a) {
  if (a < 10) {
    return `0${a}`;
  } else {
    return a;
  }
}
console.log(zero(8));
console.log(zero(2888));

function zr(b) {
  let result = b;
  if (b.length == 1) {  //length з числами не працює
    return `0${a}`;
  } else {
    return b;
  }
}
console.log(zr(8));
console.log(zr(2888));
