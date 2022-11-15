const RULE = {
  LOTTO_PRICE: 1000,
  LOTTO_NUMS: 6,
  MIN_LOTTO_NUMBER: 1,
  MAX_LOTTO_NUMBER: 45,
  RANK_LENGTH: 5,
};

const RANK = {
  LIST: [
    "3개 일치 (5,000원) -",
    "4개 일치 (50,000원) -",
    "5개 일치 (1,500,000원) -",
    "5개 일치, 보너스 볼 일치 (30,000,000원) -",
    "6개 일치 (2,000,000,000원) -",
  ],
};

const REWARD = {
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
};

const RANKING = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
  FIFTH: 5,
};

const MATCH = {
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
};

module.exports = {
  RULE,
  RANK,
  REWARD,
  RANKING,
  MATCH,
};
