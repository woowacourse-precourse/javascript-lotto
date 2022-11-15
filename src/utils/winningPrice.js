const { deepFreeze } = require('./helper');

const WINNING_PRICE = deepFreeze({
  first: 2_000_000_000,
  second: 30_000_000,
  third: 1_500_000,
  forth: 50_000,
  fifth: 5_000,
});

module.exports = WINNING_PRICE;
