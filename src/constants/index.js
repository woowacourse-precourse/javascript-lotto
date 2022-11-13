const LOTTO_AMOUNT = Object.freeze({
  VALID_UNIT: 1000,
});

const LOTTO_NUMBER = Object.freeze({
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  VALID_NUMBER_LENGTH: 6,
  VALID_WIN_NUMBER_LENGTH: 11,
});

const LOTTO_RANK = Object.freeze({
  NAME: {
    RANK_ONE: "RANK_ONE",
    RANK_TWO: "RANK_TWO",
    RANK_TREE: "RANK_TREE",
    RANK_FOUR: "RANK_FOUR",
    RANK_FIVE: "RANK_FIVE",
  },
  CASE: {
    RANK_ONE: 6,
    RANK_TWO: 5,
    RANK_TREE: 5,
    RANK_FOUR: 4,
    RANK_FIVE: 3,
  },
});

module.exports = {
  LOTTO_AMOUNT,
  LOTTO_NUMBER,
  LOTTO_RANK,
};
