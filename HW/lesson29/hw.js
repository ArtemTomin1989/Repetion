function sum_keys(obj_age, obj_name_length) {
  let sum = obj_age + obj_name_length;
  return sum;
}
console.log(sum_keys(10, 5));

function func_call(all_users) {
  console.log(all_users);
  for (let i = 0; i < all_users.length; i++) {
    all_users[i].password = sum_keys(
      all_users[i].age,
      all_users[i].name.length
    );
  }
  return all_users;
}

let users = [
  { name: "john", age: 10, password: "" },
  { name: "sarah", age: 50, password: "" },
  { name: "kevin", age: 51, password: "" },
  { name: "Johng", age: 24, password: "" },
  { name: "Alexfv", age: 17, password: "" },
];

console.log(func_call(users));
