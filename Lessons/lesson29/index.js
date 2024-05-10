function add_pass(persons, new_person) {
  //   console.log(persons);
  //   console.log(new_person);
  persons.push(new_person);

  let filtered = persons.filter((element) => element.age >= 18);
  //   console.log(filtered);

  for (i = 0; i < filtered.length; i++) {
    let generated_pass = randomWord(filtered[i].age);
    console.log(generated_pass);
    filtered[i].password = generated_pass;
  }
  return filtered;
}

function randomWord(len) {
  let result = "";
  const character =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < len; i++) {
    result += character.charAt(Math.floor(Math.random() * character.length));
  }
  return result;
}

let new_user = { name: "Bo", age: 35, password: "" };

let users = [
  { name: "john", age: 10, password: "" },
  { name: "sarah", age: 50, password: "" },
  { name: "kevin", age: 51, password: "" },
  { name: "Johng", age: 24, password: "" },
  { name: "Alexfv", age: 17, password: "" },
];

console.log(add_pass(users, new_user));

///////////////////////////////////////////////////////////////////////////////////////////////////////

function hello() {
  let a = " hello world";
  return a;
}

function two_names(name1, name2) {
  console.log(name1, name2);
  let vukluk = hello(); // в vukluk буде записуватися те шо було в ретурні
  console.log(vukluk);
  name1 += hello();
  name2 = hello();
  console.log(name1, name2);
}

let man1 = "anton";
let man2 = "ivan";
two_names(man1, man2);
