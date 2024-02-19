function logpass(logg, pass) {
  if (logg.length > 4 && pass.length > 6) {
    return `ваш логін ${logg} і ваш пароль ${pass}`;
  } else {
    let result = "";
    if (logg.length <= 4) {
      result += "Логін повинен містити більше 4 символів.";
    }
    if (logg.length <= 6) {
      result += "Пароль повинен містити більше 6 символів.";
    }
    return result;
  }
}
logpass("Artem", "Tomin123");
