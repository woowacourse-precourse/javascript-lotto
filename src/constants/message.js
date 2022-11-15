const LOTTO = require("./constants");

const MESSAGE = {
  REQUEST: {
    PAYMENT: "구입금액을 입력해 주세요.\n",
    WINNING_NUMBERS: "당첨 번호를 입력해 주세요.\n",
    BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
  },

  ERROR: {
    PAYMENT_MUST_BE_NUMBER: "[ERROR] 구입금액을 입력할 때 숫자를 입력해주세요!",
    CHANGE_MUST_BE_ZERO: "[ERROR] 구입금액을 1,000단위로 입력해주세요!",
    OUT_OF_RANGE_NUMBER: "[ERROR] 로또 번호는 1~45 사이의 값을 입력해주세요!",
    WINNING_NUMBER_MUST_BE_NUMBER: "[ERROR] 당첨 번호를 입력할 때 숫자를 입력해주세요!",
    BONUS_NUMBER_MUST_BE_NUMBER: "[ERROR] 보너스 번호를 입력할 때 숫자를 입력해주세요!",
    WINNING_NUMBER_COUNT: `[ERROR] 당첨 번호를 입력할 때 숫자 ${LOTTO.WINNING_NUMBER_COUNT}개를 입력해주세요!`,
    WINNING_NUMBER_MUST_NOT_BE_DUPLICATE: "[ERROR] 당첨 번호는 서로 다른 숫자여야 합니다!",
    LOTTO_NUMBER_LENGTH_MUST_BE_SIX: "[ERROR] 로또 번호는 6개여야 합니다.",
    LOTTO_NUMBER_MUST_NOT_BE_DUPLICATE: "[ERROR] 로또 번호는 서로 다른 숫자여야 합니다.",
  },
};

module.exports = MESSAGE;
