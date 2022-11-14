const ERROR = Object.freeze({
  PURCHASE_CHARGE: "[ERROR] 금액은 1000원 단위로 입력해야 합니다.",
  DUPLICATE_ERROR: "[ERROR] 중복된 숫자를 입력할 수 없습니다.",
  RANGE_ERROR: "[ERROR] 1~45 사이의 숫자만 입력할 수 있습니다.",
  LENGTH_ERROR: "[ERROR] 로또 번호는 6개만 입력 가능합니다.",
  CORRECT_NUM_ERROR: "[ERROR] 올바른 당첨 번호를 입력해주세요.",
  BONUS_NUM_ERROR: "[ERROR] 올바른 보너스 번호를 입력해주세요.",
  PURCHASE_ERROR: "[ERROR] 올바른 금액을 입력해주세요.",
});

const DEFAULT = Object.freeze({
  MONEY_UNIT: 1000,
  MAX_LOTTO_NUM: 45,
  MIN_LOTTO_NUM: 1,
  LOTTO_LENGTH: 6,
  ZERO: 0,
  TRUE: true,
  FALSE: false,
  INITIAL_ARRAY: [],
});

const LOTTO_PRIZE = Object.freeze({
  FIRST: 200000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
});

module.exports = {
  ERROR,
  DEFAULT,
  LOTTO_PRIZE,
};
