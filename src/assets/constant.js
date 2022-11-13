const CONSTANT = Object.freeze({
  LOTTO_PRICE: 1000,
  TRIPLE_ZERO: "000",

  LOTTO_START: 1,
  LOTTO_END: 45,
  LOTTO_LENGTH: 6,

  REGEXP: /^(\d+,){5}\d+$/,

  BONUS_MATCH: -1,

  INCREASE: 1,

  PRICE: {
    FRIST: 2000000000,
    SECOND: 30000000,
    THIRD: 1500000,
    FOURTH: 50000,
    FIFTH: 5000,
  },

  MATCH: {
    ALL: 6,
    BONUS: -1,
    FIVE: 5,
    FOUR: 4,
    THREE: 3,
  },
});

module.exports = CONSTANT;
