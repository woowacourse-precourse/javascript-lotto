const { LOTTO_DIGITS, LOTTO_NUM_MIN_RANGE, LOTTO_NUM_MAX_RANGE } = require("./condition.js");

const PURCHASE_AMOUNT = `구입금액을 입력해 주세요.
`;
const WINNING_NUMBERS = `당첨 번호를 입력해 주세요.
`;
const BONUS_NUMBER = `보너스 번호를 입력해 주세요.
`;

const REQUEST_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT,
  WINNING_NUMBERS,
  BONUS_NUMBER,
});

const INVALID_INPUT_TYPE = "[ERROR] 숫자 외의 문자를 입력할 수 없습니다. 게임 종료!";
const START_WITH_ZERO = "[ERROR] 입력은 0으로 시작할 수 없습니다. 게임 종료!";
const INDIVISIBLE_BY_LOTTO_PRICE =
  "[ERROR] 입력값이 로또 가격으로 나누어 떨어지지 않습니다. 게임 종료!";
const INVALID_LOTTO_LENGTH = `[ERROR] 로또 번호는 ${LOTTO_DIGITS}개여야 합니다.`;
const DUPLICATE_LOTTO_NUMBER = "[ERROR] 로또 번호에 중복된 숫자가 있습니다.";
const INVALID_LOTTO_NUMBER_RANGE = `[ERROR] 로또 번호의 범위는 ${LOTTO_NUM_MIN_RANGE} ~ ${LOTTO_NUM_MAX_RANGE} 이여야 합니다.`;
const EMPTY_INPUT = "[ERROR] 입력값이 없습니다.";

const ERROR_MESSAGE = Object.freeze({
  INVALID_INPUT_TYPE,
  START_WITH_ZERO,
  INDIVISIBLE_BY_LOTTO_PRICE,
  INVALID_LOTTO_LENGTH,
  DUPLICATE_LOTTO_NUMBER,
  INVALID_LOTTO_NUMBER_RANGE,
  EMPTY_INPUT,
});

module.exports = { REQUEST_MESSAGE, ERROR_MESSAGE };
