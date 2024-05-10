let users = [
  { name: "john", age: 10 },
  { name: "sarah", age: 50 },
];
function cheking(new_user) {
  if (new_user.age >= 18) {
    users.push(new_user);
  }
  return users;
}

let new_u = { name: "john", age: 18 };

console.log(cheking(new_u));
