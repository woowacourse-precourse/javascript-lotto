const LOTTO_AMOUNT = Object.freeze({
  VALID_UNIT: 1000,
});

const LOTTO_NUMBER = Object.freeze({
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  VALID_NUMBER_LENGTH: 6,
  VALID_COMMA_LENGTH: 5,
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
  AMOUNT: {
    RANK_ONE: 2000000000,
    RANK_TWO: 30000000,
    RANK_TREE: 1500000,
    RANK_FOUR: 50000,
    RANK_FIVE: 5000,
  },
  MESSAGE: {
    RANK_ONE: "6개 일치 (2,000,000,000원) - ",
    RANK_TWO: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
    RANK_TREE: "5개 일치 (1,500,000원) - ",
    RANK_FOUR: "4개 일치 (50,000원) - ",
    RANK_FIVE: "3개 일치 (5,000원) - ",
  },
});

module.exports = {
  LOTTO_AMOUNT,
  LOTTO_NUMBER,
  LOTTO_RANK,
};
