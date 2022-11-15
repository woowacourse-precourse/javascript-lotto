const MESSAGE = require('./MESSAGE');

const { Three, Four, Five, FiveBonus, Six } = MESSAGE;

const winWon = new Map([
  [Three, '5,000'],
  [Four, '50,000'],
  [Five, '1,500,000'],
  [FiveBonus, '30,000,000'],
  [Six, '2,000,000,000'],
]);

Object.freeze(winWon);
module.exports = winWon;
