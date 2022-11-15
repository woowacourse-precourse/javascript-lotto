const PLACE = Object.freeze({
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FORTH: 4,
  FIFTH: 5,
  NOTHING: 0,
});

const ZERO = Object.freeze(0);

const RESULT_MESSAGE = Object.freeze([
  '3개 일치 (5,000원) - ',
  '4개 일치 (50,000원) - ',
  '5개 일치 (1,500,000원) - ',
  '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  '6개 일치 (2,000,000,000원) - ',
]);

const RESULT = Object.freeze([
  5000,
  50000,
  1500000,
  30000000,
  2000000000,
]);

module.exports = Object.freeze({
  PLACE,
  ZERO,
  RESULT_MESSAGE,
  RESULT,
});