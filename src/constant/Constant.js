const READLINE_PHRASE = {
  INPUT_PURCHASE_AMMOUNT: "구입금액을 입력해 주세요.\n",
  INPUT_WINNING_NUMBER: "당첨 번호를 입력해 주세요.\n",
  INPUT_BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
};

const OUTPUT_PHRASE = {
  LINE_UP: "\n",
  PURCHASE_QUANTITY: "개를 구매했습니다.",
  WINNING_STATISTICS: {
    INTRO: "당첨 통계\n" + "---",
    THREE_MATCHES: "3개 일치 (5,000원) - ",
    FOUR_MATCHES: "4개 일치 (50,000원) - ",
    FIVE_MATCHES: "5개 일치 (1,500,000원) - ",
    FIVE_AND_BONUS_MATCHES: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
    ALL_MATCHES: "6개 일치 (2,000,000,000원) - ",
  },
};

const LOTTO_RANGE = {
  START_NUMBER: 1,
  END_NUMBER: 45,
  LENGTH: 6,
};

const ERROR_MESSAGE = {
  INVALID_PURCHASE_AMOUMT: {
    NOT_A_NUMBER: "[ERROR] 구매금액은 숫자로만 입력가능합니다.",
    INVALID_UNIT: "[ERROR] 구매금액은 1,000원 단위로만 입력가능합니다.",
    INVALID_NUMBER: "[ERROR] 구매금액은 1,000원부터 입력가능합니다.",
  },
  INVALID_WINNING_NUMBER: {
    NOT_A_NUMBER: "[ERROR] 로또 번호는 숫자로 이루어져야합니다",
    NOT_IN_RANGE: "[ERROR] 로또 번호는 1이상 45이하의 숫자로만 입력가능합니다.",
    INVALID_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
    IS_DUPLICATED: "[ERROR] 로또 번호가 중복되어서는 안됩니다.",
  },
  INVALID_BONUS_NUMBER: {
    NOT_A_NUMBER: "[ERROR] 보너스번호는 숫자로만 입력가능합니다",
    IS_DUPLICATED: "[ERROR] 보너스번호는 로또 번호와 중복되어선 안됩니다.",
    NOT_IN_RANGE:
      "[ERROR] 보너스번호는 1이상 45이하의 숫자로만 입력가능합니다.",
  },
};

module.exports = { READLINE_PHRASE, OUTPUT_PHRASE, LOTTO_RANGE, ERROR_MESSAGE };
