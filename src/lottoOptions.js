const WINNER_RULE = {
  prize: {
    3: 5000,
    4: 50000,
    5: 1500000,
    6: 2000000000,
  },
  bonus: { count: 5, prizeMoney: 30000000, message: '보너스 볼 일치' },
};

const PRICE = 1000;

const NUMBER_COUNT = 6;
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;

const FIXED_POINT = 1;

module.exports = {
  WINNER_RULE, PRICE, NUMBER_COUNT, MIN_NUMBER, MAX_NUMBER, FIXED_POINT,
};
