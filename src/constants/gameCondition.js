const LOTTO_PRICE = 1000;

const LOTTO_NUMBER = Object.freeze({
  START: 1,
  END: 45,
  COUNT: 6,
});

const LOTTO_INPUT = Object.freeze({
  REGEX: /(^[1-9])([0-9]*)000$/g,
});

module.exports = { LOTTO_PRICE, LOTTO_NUMBER, LOTTO_INPUT };
