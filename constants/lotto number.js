const BASIC_NUMBER = require('./basic number');

const LOTTO_NUMBER = Object.freeze({
  MIN: 1,
  MAX: 45,
  PICK: 6,
  RANGE: Array.from({ length: 45 }, (_, index) => index + BASIC_NUMBER.ONE),
});

module.exports = LOTTO_NUMBER;
