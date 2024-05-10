const { users, new_user } = require("./db");

function checking(persons, new_person) {
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].name == new_person.name) {
      return true;
    }
  }
  return false;
}

console.log(checking(users, new_user));

// function age_check(persons, new_person) {
//   for (let i = 0; i < persons.length; i++) {
//     if (persons[i].name == new_person.name) {
//       let result = persons
//         .filter((element) => element.age >= 18)
//         .map((element) => element.name.toUpperCase());
//       return result;
//     }
//   }
//   persons.push(new_person);
//   let result = persons.filter((element) => element.age >= 18);
//   return result;
// }

function age_check(persons, new_person) {
  if (persons.some((person) => person.name === new_person.name)) {
    return persons
      .filter((person) => person.age >= 18)
      .map((person) => person.name.toUpperCase());
  } else {
    persons.push(new_person);
    return persons.filter((person) => person.age >= 18);
  }
}
console.log(age_check(users, new_user));
