const { users, users2 } = require("./db");

function combining(persons, persons2) {
  let all_persons = [...persons, ...persons2];
  let new_arr = [];
//   let users_names = all_persons.map((person) => person.name);
//   users_names.sort(); - спосіб коротший, але менш зрозумілий
  
  for (i = 0; i < all_persons.length; i++) {
    new_arr.push(all_persons[i].name);
  }
  new_arr.sort();
  return new_arr;
}

console.log(combining(users, users2));
