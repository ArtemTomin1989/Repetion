function logpass(logg, pass) {
  if (logg.length > 4 && pass.length > 6) {
    console.log(`ваш логін ${logg} і ваш пароль ${pass}`);
    return `ваш логін ${logg} і ваш пароль ${pass}`;
  } else {
    return "error";
  }
}
logpass("Art", "Tomin");
