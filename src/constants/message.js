const PURCHASE_MONEY = `구입금액을 입력해 주세요.
`;

const REQUEST_MESSAGE = {
  PURCHASE_MONEY,
};

const INVALID_INPUT_TYPE = "[ERROR] 숫자 외의 문자를 입력할 수 없습니다. 게임 종료!";
const START_WITH_ZERO = "[ERROR] 입력은 0으로 시작할 수 없습니다. 게임 종료!";
const INDIVISIBLE_BY_LOTTO_PRICE =
  "[ERROR] 입력값이 로또 가격으로 나누어 떨어지지 않습니다. 게임 종료!";

const ERROR_MESSAGE = {
  INVALID_INPUT_TYPE,
  START_WITH_ZERO,
  INDIVISIBLE_BY_LOTTO_PRICE,
};

module.exports = { REQUEST_MESSAGE, ERROR_MESSAGE };
