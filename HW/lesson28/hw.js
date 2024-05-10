function checking(new_users) {
  let new_obj = new_users;
  let filtred_age = new_obj.filter((part) => part.age < 18);
  return filtred_age;
}

let users = [
  { name: "john", age: 10, password: "" },
  { name: "sarah", age: 50, password: "" },
  { name: "kevin", age: 51, password: "" },
  { name: "Johng", age: 24, password: "" },
  { name: "Alexfv", age: 17, password: "" },
  { name: "Bo", age: 35, password: "" },
];
console.log(checking(users));

//////////////////////////////////////////////////

function randomWord(len) {
  let result = "";
  const character =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < len; i++) {
    result += character.charAt(Math.floor(Math.random() * character.length));
  }
  return result;
}

function create_pass(new_user) {
  all_users.push(new_user);
  for (i = 0; i < all_users.length; i++) {
    all_users[i].password = randomWord(all_users[i].age);
  }

  return all_users;
}

let all_users = [
  { name: "john", age: 10, password: "" },
  { name: "sarah", age: 50, password: "" },
  { name: "kevin", age: 51, password: "" },
  { name: "Johng", age: 24, password: "" },
  { name: "Alexfv", age: 17, password: "" },
  { name: "Bo", age: 35, password: "" },
];

let person = { name: "john", age: 10, password: "" };

console.log(create_pass(person));
