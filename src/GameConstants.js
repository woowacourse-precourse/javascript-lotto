const GameConstants = Object.freeze({
  LOTTERY_NUMBER_LENGTH: 6,
  LOTTERY_MIN_NUMBER: 1,
  LOTTERY_MAX_NUMBER: 45,
  LOTTERY_PRICE: 1000,
  PRIZE_MONEY: {
    FIRST: '2,000,000,000',
    SECOND: '30,000,000',
    THIRD: '1,500,000',
    FOURTH: '50,000',
    FIFTH: '5,000',
  },

  PRIZE_MONEY_NUMBER: {
    FIRST: 2000000000,
    SECOND: 30000000,
    THIRD: 1500000,
    FOURTH: 50000,
    FIFTH: 5000,
  },

  PRIZE_CRITERIA: {
    FIRST: 6,
    SECOND_THIRD: 5,
    FOURTH: 4,
    FIFTH: 3,
  },
});

module.exports = GameConstants;
