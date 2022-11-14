const LOTTO_PRICE = 1000;
const LOTTO_NUM_MIN_RANGE = 1;
const LOTTO_NUM_MAX_RANGE = 45;
const LOTTO_DIGITS = 6;
const PRIZE_MATCH_NUMBER_COUNT = {
  firstPlace: 6,
  secondPlace: 5,
  thirdPlace: 5,
  fourthPlace: 4,
  fifthPlace: 3,
};
const LOTTO_PRIZE_MONEY = {
  firstPlace: 2000000000,
  secondPlace: 30000000,
  thirdPlace: 1500000,
  fourthPlace: 50000,
  fifthPlace: 5000,
  fail: 0,
};

module.exports = {
  LOTTO_PRICE,
  LOTTO_NUM_MIN_RANGE,
  LOTTO_NUM_MAX_RANGE,
  LOTTO_DIGITS,
  PRIZE_MATCH_NUMBER_COUNT,
  LOTTO_PRIZE_MONEY,
};
