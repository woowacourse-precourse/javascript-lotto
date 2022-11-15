const LOTTO_PRICE = 1000;
const PRIZE = {
  FIRST: 6,
  SECOND: 5.5,
  THIRD: 5,
  FOURTH: 4,
  FIFTH: 3,
  NONEPRIZE: -1,
};
const PRIZE_MONEY = {
  [PRIZE.FIRST]: { num: 2000000000, str: '2,000,000,000' },
  [PRIZE.SECOND]: { num: 30000000, str: '30,000,000' },
  [PRIZE.THIRD]: { num: 1500000, str: '1,500,000' },
  [PRIZE.FOURTH]: { num: 50000, str: '50,000' },
  [PRIZE.FIFTH]: { num: 5000, str: '5,000' },
};

module.exports = { LOTTO_PRICE, PRIZE, PRIZE_MONEY };
