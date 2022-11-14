const LOTTO = {
  LOTTO_PRICE: 1000,
  LOTTO_LENGTH: 6,
  FIRST_PRIZE: 2000000000,
  SECOND_PRIZE: 30000000,
  THRID_PRIZE: 1500000,
  FOURTH_PRIZE: 50000,
  FIFTH_PRIZE: 5000,
};

const MESSAGE = {
  GUIDE: {
    ENTER_MONEY: "구입금액을 입력해주세요.\n",
    ENTER_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
    ENTER_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
    WINNING_STATICS: "\n당첨 통계\n---",
    SUCCESS_TO_PURCHASE: (n) => `\n${n}개를 구매했습니다.\n`,
  },

  ERROR: {
    OUT_OF_RANGE: "[ERROR] 로또 번호는 6개여야 합니다.",
    NOT_DUPLICATED: "[ERROR] 중복되지 않는 숫자를 입력해주세요.",
    NUMBERS_IN_RANGE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  },
};
module.exports = { LOTTO, MESSAGE };
