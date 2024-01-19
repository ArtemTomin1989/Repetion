let year = 2024;
let day = 15;
let result = year * day;
console.log(result);
let enough = 40000;

if (result > enough) {
  console.log(`я помножив ${year} на ${day} і вийшло ${result}`);
} else {
  console.log(`потрібно ${enough - result}`);
}
