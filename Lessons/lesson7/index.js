let a = 10;
while (a > 0) {
  // повторення якоїсь дії
  console.log("helloWorld"); // сама дія
  a--; // механізм зупинки циклу
}

let b = -10;
while (b <= 10) {
  b++;
  // повторення якоїсь дії
  console.log(b); // сама дія
  // механізм зупинки циклу
}

let e = 0;
do {
  console.log(e);
  e++;
} while (e <= 3);

let z = 100;
while (z >= 0) {
  if (z % 5 == 0) {
    console.log(z);
  }
  z--;
}
