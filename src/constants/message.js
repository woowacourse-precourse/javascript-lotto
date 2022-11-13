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
    OUT_OF_RANGE_NUMBER: "[ERROR] 당첨 번호는 1~45 사이의 값을 입력해주세요!",
    WINNING_NUMBER_MUST_BE_NUMBER: "[ERROR] 당첨 번호를 입력할 때 숫자를 입력해주세요!",
    WINNING_NUMBER_COUNT: `[ERROR] 당첨 번호를 입력할 때 숫자 ${LOTTO.NUMBER_COUNT}가지를 입력해주세요!`,
  },
};

module.exports = MESSAGE;
