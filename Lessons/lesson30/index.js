// const users = require("./db");
//таким чином приймається лише одна одиниця інформації

const { users, new_user } = require("./db"); // коли шлях вказується через ./, то система шукає файл в тій же папці

//таким чином приймається дві і більше одиниць інформації (змінна, функція, об'єкт, масив, будь що)
// console.log(users, "\n", new_user);

function checking(all_persons, new_person) {
  console.log(all_persons, new_person);
  if (new_person.name.length > 2) {
    all_persons.push(new_person);
  }
  return all_persons;
}

console.log(checking(users, new_user));
