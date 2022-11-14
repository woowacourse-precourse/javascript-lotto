const { MATCH_COUNT, PRIZE_AMOUNT } = require("./constants");

const MESSAGE = {
  ENTER_PURCHASE_AMOUNT: "구입금액을 입력해주세요.",
  ENTER_WINNING_NUMBER: "당첨 번호를 입력해주세요.",
  ENTER_BONUS_NUMBER: "보너스 번호를 입력해주세요.",

  PURCHASE_LOTTO(number) {
    return `${number}개를 구매했습니다.`;
  },

  WINNING_STATS: "당첨 통계",
  DIVIDE_LINE: "---",

  MATCH_RESULT: {
    FIRST_RANK(number) {
      return `6개 일치 (2,000,000,000원) - ${number}개`;
    },
    SECOND_RANK(number) {
      return `5개 일치, 보너스 볼 일치 (30,000,000원) - ${number}개`;
    },
    THIRD_RANK(number) {
      return `5개 일치 (1,500,000원) - ${number}개`;
    },
    FORTH_RANK(number) {
      return `4개 일치 (50,000원) - ${number}개`;
    },
    FIFTH_RANK(number) {
      return `3개 일치 (5,000원) - ${number}개`;
    },
  },

  RATE_OF_RETURN(rateOfReturn) {
    return `총 수익률은 ${rateOfReturn.toLocaleString()}%입니다.`;
  },
};

const ERROR = {
  NUMBERS_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  NUMBER_RANGE: "[ERROR] 로또 번호의 범위는 1~45 사이여야 합니다.",
  NUMBERS_DUPLICATE: "[ERROR] 로또 번호는 서로 중복 되지 않아야 합니다.",
  BONUS_NUMBER_RANGE: "[ERROR] 보너스 번호의 범위는 1~45 사이여야 합니다.",

  AMOUNT_TYPE: "[ERROR] 금액은 숫자만 입력해야 합니다.",
  AMOUNT_UNIT: "[ERROR] 금액은 1,000원 단위만 입력 가능합니다.",
};

module.exports = { MESSAGE, ERROR };
