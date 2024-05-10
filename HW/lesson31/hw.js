const { users, new_user } = require("./db");
function joining(persons, new_person) {
  persons.push(new_person);
  let total_age = 0;
  let mid_age = 0;
  for (i = 0; i < persons.length; i++) {
    total_age += persons[i].age;
  }
  mid_age = total_age / persons.length;
  mid_age = Math.floor(mid_age);
  return mid_age;
}

console.log(joining(users, new_user));
