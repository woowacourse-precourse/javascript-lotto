const GAME_MESSAGES = Object.freeze({
  ASK_TO_PAY: "구입 금액을 입력해주세요: ",
  RETURN_PURCHASED_AMOUNT: (n) => `${n}개를 구매했습니다.`,
});

const ERROR_MESSAGES = Object.freeze({
  INVALID_COST_UNIT: "[ERROR] 금액은 1,000원 단위로 입력해 주세요.",
  INVALID_COST_RANGE:
    "[ERROR] 가격은 1,000원 이상, 10,000원 이하로 입력해 주세요.",
  INVALID_LOTTO_RANGE: "[ERROR] 각 로또 번호는 1~45 사이의 숫자여야 합니다.",
  INVALID_LOTTO_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  DUPLICATED_LOTTO_NUM: "[ERROR] 로또 번호는 중복될 수 없습니다.",
  INVALID_LOTTO_AMOUNT:
    "[ERROR] 구입한 로또의 갯수와 생성된 로또 번호의 갯수가 맞는지 확인해 주세요.",
});

const NUMBERS = Object.freeze({
  MIN_LOTTO_NUM: 1,
  MAX_LOTTO_NUM: 45,
});

module.exports = { GAME_MESSAGES, ERROR_MESSAGES, NUMBERS };
