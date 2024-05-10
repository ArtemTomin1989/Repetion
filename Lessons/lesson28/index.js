let users = [
  { name: "john", age: 10 },
  { name: "sarah", age: 50 },
  { name: "kevin", age: 51 },
];

function users_array(user_arr) {
  let arr_long_name = [];
  for (i = 0; i < user_arr.length; i++) {
    if (user_arr[i].name.length > 4) {
      arr_long_name.push(user_arr[i]);
    }
  }
  return arr_long_name;
}

console.log(users_array(users));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function arr_name(persons) {
  return persons.filter((person) => person.name.length > 4);
}

console.log(arr_name(users));

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function randomWord(len) {
  let result = "";
  const character =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < len; i++) {
    result += character.charAt(Math.floor(Math.random() * character.length));
  }
  return result;
}

console.log(randomWord(8));

let personsWithPasswords = [
  { name: "Johng", age: 24, country: "Germany", password: "" },
  { name: "Alexfv", age: 18, country: "United States", password: "" },
  { name: "Bo", age: 35, country: "Canada", password: "" },
];

function func_call(persons) {
  for (i = 0; i < persons.length; i++) {
    persons[i].password = randomWord(8);
  }
  return persons;
}

console.log(func_call(personsWithPasswords));
