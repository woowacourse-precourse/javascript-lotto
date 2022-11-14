const LOTTO_PRICE = 1000;
const LOTTO_NUM_MIN_RANGE = 1;
const LOTTO_NUM_MAX_RANGE = 45;
const LOTTO_DIGITS = 6;
const PRIZE_MATCH_NUMBER_COUNT = {
  firstPrize: 6,
  secondPrize: 5,
  thirdPrize: 5,
  fourthPrize: 4,
  fifthPrize: 3,
};
const LOTTO_PRIZE_MONEY = {
  firstPrize: 2000000000,
  secondPrize: 30000000,
  thirdPrize: 1500000,
  fourthPrize: 50000,
  fifthPrize: 5000,
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
