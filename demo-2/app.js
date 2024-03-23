// CommonJS modules (012 lection)
const { chatacters, stealRing } = require("./characters.js");

let myChars = chatacters;
myChars = stealRing(chatacters, "Фродо");
for (const c of myChars) {
  console.log(c);
}
myChars = stealRing(chatacters, "Бильбо");
for (const c of myChars) {
  console.log(c);
}
