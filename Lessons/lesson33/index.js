const { users } = require("./users");
require("dotenv").config();
const { plusing, minus } = require("./ind");

let new_user = { name: "alberto", age: 37, password: "" };

function checking(all_persons, new_person) {
  if (new_person.age > 18) {
    let url_pass = process.env.URL;
    new_person.password = url_pass;
  }
  all_persons.push(new_person);
  return all_persons;
}

// console.log(checking(users, new_user));

function last_user() {
  let call = checking(users, new_user);
  lnth_obj = call.length - 1;
  console.log(call[lnth_obj].password);
}
last_user();

console.log(plusing(2, 5));
console.log(minus(2, 5));
