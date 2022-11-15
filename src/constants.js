const Constants = {
  MESSAGE: {
    GET_PERCHASE: "구입금액을 입력해 주세요.\n",
    PERCHASE_FINISH: "개를 구매했습니다.",
    GET_WIN: "\n당첨 번호를 입력해 주세요.",
    GET_BONUS: "\n보너스 번호를 입력해 주세요.\n",
  },
  RESULT: {
    RANK_PHRASE : {
      1: "6개 일치 (2,000,000,000원) - ",
      2: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
      3: "5개 일치 (1,500,000원) - ",
      4: "4개 일치 (50,000원) - ",
      5: "3개 일치 (5,000원) - "},
  },
  ERROR: {
    INVALID_MONEY: "[ERROR] 구입 금액은 1000원 단위의 수여야 합니다.",
    INVALID_WIN_INPUT: "[ERROR] 로또 번호는 쉼표로 구분된 6개의 수를 입력해야 합니다.",
    INVALID_WIN_DUPLICATE: "[ERROR] 로또 번호는 중복되지 않는 수여야 합니다.",
    INVALID_WIN_RANGE: "[ERROR] 로또 번호는 1과 45 사이의 수여야 합니다.",
    INVALID_BONUS_INPUT: "[ERROR] 보너스 번호는 로또 번호와 중복되지 않는 1과 45 사이의 수여야 합니다.",
  },
  LOTTO: {
    NUMBER_COUNT: 6,
    REWARD_TABLE: {1: 2000000000, 2: 30000000, 3: 1500000, 4: 50000, 5: 5000},
  }
}

module.exports = Constants;