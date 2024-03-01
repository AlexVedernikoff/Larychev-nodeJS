// fs - модуль для работы с файловой системой.
// https://www.dev-notes.ru/articles/javascript-require-vs-import/
fs = require("fs");
const data = fs.readFileSync("./data.txt");
console.log(data.toString());
