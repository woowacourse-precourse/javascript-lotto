const LOTTO_PRICE = 1000;

const RANGE_OF_LOTTO_NUMBER = {
  MIN: 1,
  MAX: 45,
};

const TOTAL_COUNTS = 6;

const FIVE_AND_BONUS = "5andBonus";

const INITIAL_STATICS = {
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  "5andBonus": 0,
};

const WINNING_PRICES = {
  3: 5000,
  4: 50000,
  5: 1500000,
  6: 2000000000,
  "5andBonus": 30000000,
};

const ADD_COMMA_EXP = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;

module.exports = {
  LOTTO_PRICE,
  RANGE_OF_LOTTO_NUMBER,
  TOTAL_COUNTS,
  INITIAL_STATICS,
  FIVE_AND_BONUS,
  WINNING_PRICES,
  ADD_COMMA_EXP,
};
