const FIRST = Object.freeze({
  NAME: '1등',
  MATCH_COUNT: 6,
  PRIZE_MONEY: 2000000000,
});

const SECOND = Object.freeze({
  NAME: '2등',
  MATCH_COUNT: 5,
  HAS_BONUS_NUMBER: true,
  PRIZE_MONEY: 30000000,
});

const THIRD = Object.freeze({
  NAME: '3등',
  MATCH_COUNT: 5,
  PRIZE_MONEY: 1500000,
});

const FOURTH = Object.freeze({
  NAME: '4등',
  MATCH_COUNT: 4,
  PRIZE_MONEY: 50000,
});

const FIFTH = Object.freeze({
  NAME: '5등',
  MATCH_COUNT: 3,
  PRIZE_MONEY: 5000,
});

const NOTHING = Object.freeze({
  NAME: '꽝',
  PRIZE_MONEY: 0,
});

const RANKING_ARRAY = [FIFTH, FOURTH, THIRD, SECOND, FIRST];
const MIN_LOTTO_NUMBER = 1;
const MAX_LOTTO_NUMBER = 45;
const COUNT_OF_LOTTO_NUMBERS = 6;
const UNIT_OF_AMOUNT = 1000;
const DECIMAL_PLACE_OF_PROFIT_RATE = 1;

module.exports = {
  FIRST,
  SECOND,
  THIRD,
  FOURTH,
  FIFTH,
  NOTHING,
  RANKING_ARRAY,
  UNIT_OF_AMOUNT,
  DECIMAL_PLACE_OF_PROFIT_RATE,
  COUNT_OF_LOTTO_NUMBERS,
  MAX_LOTTO_NUMBER,
  MIN_LOTTO_NUMBER,
};
