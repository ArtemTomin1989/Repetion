const { users } = require("./users");

require("dotenv").config();

const user_name = process.env.USERNM;
const user_pass = process.env.PASS;


let admin = { user_name, user_pass };

function checking(persons, new_person) {
  if (new_person.user_name.length > 6 && new_person.user_pass > 6) {
    let new_obj = {
      name: new_person.user_name,
      age: 0,
      password: `${new_person.user_pass}`,
    };
    persons.push(new_obj);
    return persons;
  } else {
    return `цей юзернейм або цей пароль закороткі`;
  }
}

console.log(checking(users, admin));
