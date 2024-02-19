function nss(a, b, c) {
  console.log(`${a} ${b} ${c}`);
}
nss("Томін", "Артем", "Олександрович");
nss("hello", "world", "!");

function check(a) {
  if (a >= 18) {
    console.log("welcome");
  } else {
    console.log("go away");
  }
}
check(16);
check(30);

function moreless(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(`більшим числом виявилось ${moreless(16, 30)}`);

function reserved(a, b) {
  return a ** b;
}
console.log(`${reserved(5, 3)}`);

let g = "text";
console.log(g.length);

function pass(a) {
  if (a.length > 4) {
    return a;
  } else {
    return "error";
  }
}

console.log(pass("pas"));
