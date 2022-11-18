const GAME_MESSAGES = Object.freeze({
  ASK_TO_PAY: "구입 금액을 입력해주세요: ",
  RETURN_PURCHASED_AMOUNT: (n) => `${n}개를 구매했습니다.`,
  ASK_FOR_WINNING_NUMBERS: "당첨 번호를 입력해 주세요: ",
  ASK_FOR_BONUS_NUMBER: "보너스 번호를 입력해 주세요: ",
  GAME_OVER: "\n--------------------\n게임 종료",
});

const ERROR_MESSAGES = Object.freeze({
  FORMAT_ERROR: "[ERROR] 숫자만 입력해주세요.",
  INVALID_COST_UNIT: "[ERROR] 금액은 1,000원 단위로 입력해 주세요.",
  INVALID_COST_RANGE:
    "[ERROR] 가격은 1,000원 이상, 10,000원 이하로 입력해 주세요.",
  INVALID_LOTTO_RANGE: "[ERROR] 각 로또 번호는 1~45 사이의 숫자여야 합니다.",
  INVALID_LOTTO_LENGTH: "[ERROR] 6자리로 입력해 주세요.",
  DUPLICATED_LOTTO_NUM: "[ERROR] 로또 번호는 중복될 수 없습니다.",
  INVALID_LOTTO_AMOUNT:
    "[ERROR] 구입한 로또의 갯수와 생성된 로또 번호의 갯수가 맞는지 확인해 주세요.",
  INVALID_SEPARATOR: "[ERROR] 쉼표(,) 로 숫자를 구분해 주세요!",
});

const NUMBERS = Object.freeze({
  MIN_LOTTO_NUM: 1,
  MAX_LOTTO_NUM: 45,
  LOTTO_NUM_AMOUNT: 6,
  MIN_COST_NUM: 1000,
  MAX_COST_NUM: 10000,
  FIRST_PRIZE: "2,000,000,000".replace(/,/g, ""),
  SECOND_PRIZE: "30,000,000".replace(/,/g, ""),
  THIRD_PRIZE: "1,500,000".replace(/,/g, ""),
  FOURTH_PRIZE: "50,000".replace(/,/g, ""),
  FIFTH_PRIZE: "5,000".replace(/,/g, ""),
});

module.exports = { GAME_MESSAGES, ERROR_MESSAGES, NUMBERS };
