let a = 2024;
let b = 1991;
a -= b;
console.log(a);

a = a + 1;
a += 1;
a++;

let d = "2";
let e = +d; //переведення в число
console.log(d);
console.log(e);
let f = 3;
let q = `${f}`; //переведення в стрінг (стрінг - рядок) рядок - знаки прописом, буквами, намбер - числове значення
console.log(q);

let x = 10;
let y = 2;
if (x > 5 && y > 5) {
  console.log("war");
} else {
  console.log("nine");
}

//   "||" - or ( або)
if (x > 5 || y > 5) {
  console.log("war");
} else {
  console.log("nine");
}

let o = 10;
if (o >= 10 && o < 1000) {
  console.log("let's go");
} else if (o / 2 > 4) {
  console.log("cmon");
} else {
  console.log("nine");
}
