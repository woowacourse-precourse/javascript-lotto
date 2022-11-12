const MESSAGE = require('./MESSAGE');

const [Three, Four, Five, FiveBonus, Six] = MESSAGE;

const winWon = new Map([
  [Three, 5000],
  [Four, 50000],
  [Five, 1500000],
  [FiveBonus, 30000000],
  [Six, 200000000],
]);

module.exports = winWon;
