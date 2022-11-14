const UNIT = Object.freeze({
  LOTTO: '개',
  MONEY: '원',
});

const FORMAT = Object.freeze({
  LOCALE: 'ko-KR',
  MATCH: '개 일치',
  MATCH_BONUS: ', 보너스 볼 일치',
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
  PRIZE,
};
