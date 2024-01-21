let a = 10;
let b = 3;
let c = a % b; // перевірка на остачу від ділення
console.log(c);
let secret = 5;
if (secret % 2 == 0) {
  console.log("парне");
} else {
  console.log("непарне");
}

let d = secret % 2 == 0 ? "парне" : "непарне"; // короткий запис перевірки в змінній
console.log(d);

let q = 12;
let result;
if (q % 3 == 0 && q % 2 == 0) {
  result = "число ділиться на 3 і парне";
} else {
  result = "хз";
}
console.log(result);

let res = q % 3 == 0 && q % 2 == 0 ? "число ділиться на 3 і парне" : "хз";
console.log(res);
