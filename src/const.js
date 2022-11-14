const PRIZE_NAME = ['fail', 'fifth', 'forth', 'third', 'first'];
const ORDER_OF_PRINT = ['fifth', 'forth', 'third', 'second', 'first'];
const PRIZE_REWARD = Object.freeze({
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  forth: 50000,
  fifth: 5000,
});
const PRIZE_CORRECT_COUNT = Object.freeze({
  first: 6,
  second: 5,
  third: 5,
  forth: 4,
  fifth: 3,
});
const LOTTO_PAYMENT = 1000;

module.exports = {
  PRIZE_NAME,
  PRIZE_REWARD,
  LOTTO_PAYMENT,
  ORDER_OF_PRINT,
  PRIZE_CORRECT_COUNT,
};
