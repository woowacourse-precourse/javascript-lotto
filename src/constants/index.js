const GAME_MESSAGE = {
  INPUT_PURCHASE_AMOUNT: "구입금액을 입력해 주세요.",
  LOTTO_CNT: "개를 구매했습니다.",
  INPUT_WINNING_NUMBERS: "당첨 번호를 입력해 주세요.",
  INPUT_BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
};

const ERROR_MESSAGE = {
  TYPE_ERROR: "[ERROR] 숫자를 입력해주세요.",
  UNIT_ERROR: "[ERROR] 1,000으로 나누어 떨어지는 금액을 입력해주세요.",
  RANGE_ERROR: "[ERROR] 1~45 범위의 값만 입력해주세요.",
  WINNER_NUMBERS_LENGTH_ERROR: `[ERROR] 값을 6개만 입력해주세요.`,
  BONUS_NUMBER_LENGTH_ERROR: `[ERROR] 값을 1개만 입력해주세요.`,
};

const LOTTO_VALUE = {
  MIN: 1,
  MAX: 45,
  LENGTH: 6,
  UNIT: 1000,
};

module.exports = { GAME_MESSAGE, ERROR_MESSAGE, LOTTO_VALUE };
