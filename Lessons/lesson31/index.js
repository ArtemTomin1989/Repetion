require("dotenv").config();
const secret_password = process.env.PASSWORD; // змінна, яка захована в файлі .env

console.log(secret_password);
const secret_login = process.env.LOGIN;

console.log(secret_login);
