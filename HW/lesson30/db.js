let users = [
  { name: "john", age: 10, password: "" },
  { name: "sarah", age: 50, password: "" },
  { name: "kevin", age: 51, password: "" },
  { name: "Johng", age: 24, password: "" },
  { name: "Ace", age: 17, password: "" },
];

let new_user = { name: "Ace", age: 43, password: "" };

// module.exports = users;
//так передається лише одна одиниця інформації

module.exports = { users, new_user };
//об'єктом передається дві і більше одиниць інформації
