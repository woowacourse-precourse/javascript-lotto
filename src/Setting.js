const UNIT = Object.freeze({
  LOTTO: '개',
  MONEY: '원',
});

const FORMAT = Object.freeze({
  LOCALE: 'ko-KR',
  MIN_FRACTION_DIGIT: 1,
  MAX_FRACTION_DIGIT: 1,
  MATCH: '개 일치',
  MATCH_BONUS: ', 보너스 볼 일치',
});

const LOTTO = Object.freeze({
  PRICE: 1000,
  NUMBER_COUNT: 6,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
});

const PRIZE = Object.freeze({
  0: 0,
  5: 5000,
  4: 50000,
  3: 1500000,
  2: 30000000,
  1: 2000000000,
});

module.exports = {
  UNIT,
  FORMAT,
  LOTTO,
  PRIZE,
};
