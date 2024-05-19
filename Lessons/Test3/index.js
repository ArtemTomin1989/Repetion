const { users } = require("./users");

function calculate(persons) {
  let adult = persons.filter((ind) => ind.age >= 18 && ind.age <= 60);
  let total_age = 0;

  for (i = 0; i < adult.length; i++) {
    total_age += adult[i].age;
  }

  let mid_age = total_age / adult.length;
  mid_age = Math.round(mid_age);

  let result = `Середній вік користувачів віком від 18 до 60 років: ${mid_age}.`;

  return result;
}

console.log(calculate(users));

///////////////////////////////////////////////////////////////////////////////////////////

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((elem) => {
  console.log(elem / 2);
});
