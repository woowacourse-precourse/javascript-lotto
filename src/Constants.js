const LOTTO_PRICE = 1000;
const LOTTO_START = 1;
const LOTTO_END = 45;
const LOTTO_NUMBER_COUNT = 6;
const MINIMUM_MATCH_COUNT = 3;
const REVENUE = {
  3: {
    message: '3개 일치 (5,000원)',
    revenue: 5000,
  },
  4: {
    message: '4개 일치 (50,000원)',
    revenue: 50000,
  },
  5: {
    message: '5개 일치 (1,500,000원)',
    revenue: 1500000,
  },
  '5B': {
    message: '5개 일치, 보너스 볼 일치 (30,000,000원)',
    revenue: 30000000,
  },
  6: {
    message: '6개 일치 (2,000,000,000원)',
    revenue: 2000000000,
  },
};

module.exports = {
  LOTTO_PRICE,
  LOTTO_END,
  LOTTO_START,
  LOTTO_NUMBER_COUNT,
  REVENUE,
  MINIMUM_MATCH_COUNT,
};
