function logpass(logg, pass) {
  let result = "Привіт ";
  if (logg.length > 4 && pass.length > 6) {
    result += `ваш логін ${logg} і ваш пароль ${pass}`;
    return result;
  }
  if (logg.length <= 4) {
    result += "Логін повинен містити більше 4 символів.";
    return result;
  }
  if (pass.length <= 6) {
    result += "Пароль повинен містити більше 6 символів.";
    return result;
  } else {
    result = `unknown"  ${logg} ${pass}`;
    return result;
  }
}
console.log(logpass(35153, 123));
console.log(logpass("user123", "password123")); // Все ОК
console.log(logpass("usr", "pass")); // Логін повинен містити більше 4 символів
console.log(logpass("user123", "pass")); // Пароль повинен містити більше 6 символів
console.log(logpass("usr", "pass")); // Логін повинен містити більше 4 символів та Пароль повинен містити більше 6 символів

let a = logpass("basas", "olololo");
console.log(a);

let arrowFunc = (logg, pass) => {
  console.log(logg, pass);
  return logg + pass;
};
console.log(arrowFunc(2, 3));
