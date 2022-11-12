const LOTTO = {
  MINIMUM: 1,
  MAXIMUM: 45,
  LENGTH: 6,
};

const MONEY = {
  UNIT: 1000,
};

const REWARD = {
  THREE: 5000,
  FOUR: 50000,
  FIVE: 1500000,
  FIVE_BONUS: 30000000,
  SIX: 2000000000,
};

const REWARD_LIST = [
  REWARD.THREE,
  REWARD.FOUR,
  REWARD.FIVE,
  REWARD.FIVE_BONUS,
  REWARD.SIX,
];

const MATCH = {
  THREE: "3개 일치",
  FOUR: "4개 일치",
  FIVE: "5개 일치",
  FIVE_BONUS: "5개 일치, 보너스 볼 일치",
  SIX: "6개 일치",
};

const MATCH_LIST = [
  MATCH.THREE,
  MATCH.FOUR,
  MATCH.FIVE,
  MATCH.FIVE_BONUS,
  MATCH.SIX,
];

module.exports = {
  LOTTO,
  MONEY,
  REWARD,
  REWARD_LIST,
  MATCH,
  MATCH_LIST,
};
