const chatacters = [
  { name: "Фродо", hasRing: false },
  { name: "Бильбо", hasRing: false },
];

const stealRing = (chatacters, owner) =>
  chatacters.map(({ name }) =>
    name === owner ? { name, hasRing: true } : { name, hasRing: false }
  );

// Экспортируем массив chatacters и функцию stealRing()
module.exports = { chatacters, stealRing };
