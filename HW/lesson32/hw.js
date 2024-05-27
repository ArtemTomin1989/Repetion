const { users } = require("./users");
require("dotenv").config();

const checking_name = process.env.NAME_TO_CHECK;

function cheking(persons, new_person) {
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].name === new_person) {
      return "ім'я вже існує в масиві";
    }
  }
  return "ім'я унікальне";
}
console.log(cheking(users, checking_name));
