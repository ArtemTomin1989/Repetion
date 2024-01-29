let a = 78;

if (a < 13) {
  console.log("дитина");
} else if (a > 13 && a <= 17) {
  console.log("підліток");
} else if (a > 18 && a <= 59) {
  console.log("дорослий");
} else {
  console.log("літня людина");
}

let result =
  a < 13
    ? "дитина"
    : a > 13 && a <= 17
    ? "підліток"
    : a > 18 && a <= 59
    ? "дорослий"
    : "літня людина";
console.log(result);
