const INPUT_MESSAGE = Object.freeze({
  BUY: "구입금액을 입력해 주세요.\n",
});

const OUTPUT_MESSAGE = Object.freeze({
  BUY: (num) => `${num}개를 구매했습니다.`,
});

const ERROR_MESSAGE = Object.freeze({
  NOT_NUMBER: "[ERROR] 입력값이 숫자여야 합니다.",
  IS_EMPTY: "[ERROR] 입력값을 입력해주세요.",
  CANT_DIVIDE: "[ERROR] 입력값을 1000단위로 입력해주세요.",
  OVER_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
});

module.exports = { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
