const LOTTO_PRICE = 1000;

const LOTTO_NUMBER = Object.freeze({
  START_NUMBER: 1,
  END_NUMBER: 45,
  COUNT_NUMBER: 6,
});

const LOTTO_INPUT = Object.freeze({
  PRICE_REGEX: /(^[1-9])([0-9]*)000$/g,
  MAX_MONEY: 1000000000,
});

module.exports = { LOTTO_PRICE, LOTTO_NUMBER, LOTTO_INPUT };
