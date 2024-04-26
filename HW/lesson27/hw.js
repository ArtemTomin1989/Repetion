function cheking(new_user) {
  let users = [];
  if (new_user.age > 18) {
    users.push(new_user);
  }
  return users;
}

new_u = { name: "john", age: 19 };

console.log(cheking(new_u));
