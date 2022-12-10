const { LOTTO_LEGNTH, MIN_PRICE, MAX_NUMBER } = require("./GameConfig");

const ERROR_MESSAGE = {
  LOTTO_NUMBERS: {
    LOTTO_NUMBER_RANGE: `[ERROR] 로또 번호는 1~${MAX_NUMBER}사이의 ${LOTTO_LEGNTH}자리 숫자여야 합니다.`,
    CANNOT_DUPLICATE_NUMBER: "[ERROR] 로또 번호는 중복될 수 없습니다.",
  },

  PURCHASE_PRICE: {
    EXCEPT_COMMA: "[ERROR] 구입 금액 입력 시 콤마(,)는 제외하고 입력해주세요.",
    MIN_UNIT_PRICE: `[ERROR] 금액은 ${MIN_PRICE}원 단위로 숫자만 입력해주세요.`,
    MIN_PURCHASE_PRICE: `[ERROR] 로또 구입의 최소 금액은 ${MIN_PRICE}원 입니다.`,
  },

  BONUS_NUMBER: {
    BONUS_NUMBER_RANGE: `[ERROR] 보너스 번호는 1~${MAX_NUMBER}사이의 숫자이여야 합니다.`,
    CANNOT_DUPLICATE_NUMBER:
      "[ERROR] 보너스 번호는 당첨 번호와 중복이 되어서는 안됩니다.",
  },
};

module.exports = ERROR_MESSAGE;
