const LOTTO_PRICE = 1000;
const CHECK_MATCH_BONUS_LIMIT = 5;

const LOTTO_NUMBER = Object.freeze({
  START_NUMBER: 1,
  END_NUMBER: 45,
  COUNT_NUMBER: 6,
});

const LOTTO_INPUT = Object.freeze({
  PRICE_REGEX: /(^[1-9])([0-9]*)000$/g,
  MAX_MONEY: 1000000000,
});

const STATIC_RANK = Object.freeze({
  FIRST_RANK: 1,
  SECOND_RANK: 2,
  THIRD_RANK: 3,
  FOURTH_RANK: 4,
  FIFTH_RANK: 5,
  FAIL: 6,
});

const STATIC_TEMPLATE = {
  5: {
    matchCount: 3,
    price: 5000,
    hasBonus: false,
  },
  4: {
    matchCount: 4,
    price: 50000,
    hasBonus: false,
  },
  3: {
    matchCount: 5,
    price: 1500000,
    hasBonus: false,
  },
  2: {
    matchCount: 5,
    price: 30000000,
    hasBonus: true,
  },
  1: {
    matchCount: 6,
    price: 2000000000,
    hasBonus: false,
  },
  6: {
    matchCount: -1,
    price: 0,
    hasBonus: false,
  },
};

module.exports = {
  LOTTO_PRICE,
  CHECK_MATCH_BONUS_LIMIT,
  LOTTO_NUMBER,
  LOTTO_INPUT,
  STATIC_TEMPLATE,
  STATIC_RANK,
};
