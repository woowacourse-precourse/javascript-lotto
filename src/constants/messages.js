const INPUT_MESSAGE = Object.freeze({
  PURCHASE_INPUT: `구입금액을 입력해 주세요.`,
  WINNER_INPUT: `당첨 번호를 입력해 주세요.`,
  BONUS_INPUT: `보너스 번호를 입력해 주세요.`,
});
const ERROR_MESSAGE = Object.freeze({
  CANT_DIVIDE: `[ERROR] 구입 금액이 1000원으로 나누어 떨어지지 않습니다.`,
  NOT_NUMBER: `[ERROR] 입력값이 숫자여야 합니다.`,
  UNDER_BASIC_PRICE: `[ERROR] 구입 금액이 1000 이상이어야 합니다.`,
});
const PRINT_MESSAGE = Object.freeze({
  PURCHASE_MESSAGE: (num) => `${num}개를 구매했습니다.`,
});
module.exports = { INPUT_MESSAGE, ERROR_MESSAGE, PRINT_MESSAGE };
