const { users } = require("./users");
const { add_new_user } = require("./fc");
require("dotenv").config();
const name = process.env.NAME;
const age = process.env.AGE;
const pass = process.env.PASS;
let new_user = { name, age, password: pass };

function cheking(persons, new_person) {
  let result = [...persons];

  if (
    new_person.name.length > 6 &&
    new_person.password.length > 6 &&
    new_person.age > 18
  ) {
    result = add_new_user(persons, new_person);
  }

  return result;
}
console.log(cheking(users, new_user));
