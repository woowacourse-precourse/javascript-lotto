module.exports = {
  LOTTO: {
    NUMBER_MIN: 1,
    NUMBER_MAX: 45,
    COUNT: 6,
  },

  INPUT_ERROR_MESSAGE: {
    REMAINDER_ERROR: "[ERROR] 구매 금액을 1000원 단위로 입력해주세요.",
    NAN_ERROR: "[ERROR] 숫자를 입력해주세요.",

    COUNT_ERROR: "[ERROR] 6개의 숫자를 입력해주세요.",
    RANGE_ERROR: "[ERROR] 1부터 45 사이의 숫자를 입력해주세요.",

    OVERLAP_ERROR: "[ERROR] 중복되지 않는 숫자 6개를 입력해주세요.",
    BONUS_OVERLAP_ERROR: "[ERROR] 당첨 번호에 없는 숫자를 입력해주세요.",
  },

  WINNINGS: {
    RANK_MAX: 5,

    FIRST_WIN: {
      RANK: 1,
      COUNT: 6,
      AMOUNT: 2000000000,
    },
    SECOND_WIN: {
      RANK: 2,
      COUNT: 5,
      AMOUNT: 30000000,
    },
    THIRD_WIN: {
      RANK: 3,
      COUNT: 5,
      AMOUNT: 1500000,
    },
    FOURTH_WIN: {
      RANK: 4,
      COUNT: 4,
      AMOUNT: 50000,
    },
    FIFTH_WIN: {
      RANK: 5,
      COUNT: 3,
      AMOUNT: 5000,
    },
  },
};
