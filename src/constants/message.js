const INPUT_MESSAGE = Object.freeze({
  BUY: "구입금액을 입력해 주세요.\n",
  WIN_NUMBER: "\n당첨 번호를 입력해주세요.\n",
  BONUS_NUMBER: "\n보너스 번호를 입력해주세요.\n",
});

const OUTPUT_MESSAGE = Object.freeze({
  BUY: (num) => `${num}개를 구매했습니다.`,
  START_STATICS: `당첨 통계\n ---\n`,
  THREE_MATCH: (num) => `3개 일치 (5,000원) - ${num}개`,
  FOUR_MATCH: (num) => `4개 일치 (50,000원) - ${num}개`,
  FIVE_MATCH: (num) => `5개 일치 (1,500,000원) - ${num}개`,
  FIVE_BONUS_MATCH: (num) =>
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${num}개`,
  SIX_MATCH: (num) => `6개 일치 (2,000,000,000원) - ${num}개`,
  TOTAL_INCOME: (percent) => `총 수익률은 ${percent}%입니다.`,
});

const ERROR_MESSAGE = Object.freeze({
  NOT_NUMBER: "[ERROR] 로또 구입금액은 숫자여야 합니다.",
  IS_EMPTY: "[ERROR] 로또 구입금액을 입력해주세요.",
  CANT_DIVIDE: "[ERROR] 로또 구입금액을 1000단위로 입력해주세요.",
  MAX_MONEY: "[ERROR] 로또 구입금액이 너무 큽니다.",
  WORNG_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  LOTTO_DUPLICATE: "[ERROR] 로또 번호가 중복되었습니다.",
  NOT_LOTTO_NUMBER: "[ERROR] 로또 번호는 숫자만 가능합니다.",
  WIN_NUMBERS_DUPLICATE: "[ERROR] 당첨 번호가 중복되었습니다.",
  WIN_NUMBERS_RIGHT_LENGTH: "[ERROR] 당첨 번호를 6개 입력해주세요.",
  WIN_NUMBERS_NOT_NUMBER: "[ERROR] 당첨 번호는 숫자여야 합니다.",
  WIN_NUMBERS_IN_LOTTO_BOUNDARY:
    "[ERROR] 당첨 번호를 1부터 45사이의 숫자를 입력해주세요.",
  BONUS_NOT_NUMBER: "[ERROR] 보너스 번호는 숫자여야 합니다.",
  BONUS_DUPLICATE: "[ERROR] 보너스 번호가 당첨 번호와 중복되었습니다.",
  BONUS_NUMBERS_IN_LOTTO_BOUNDARY:
    "[ERROR] 보너스 번호를 1부터 45사이의 숫자를 입력해주세요.",
});

module.exports = { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
