const LOTTO_ERROR = {
  LENGTH_OF_SIX: "[ERROR] 로또 번호는 6개여야 합니다. 종료합니다.",
  NOT_A_NUMBER: "[ERROR] 로또 번호는 숫자이어야 합니다. 종료합니다.",
  OUT_OF_RANGE: "[ERROR] 로또 번호는 1부터 45 사이의 정수이어야 합니다. 종료합니다.",
  NOT_UNIQUE: "[ERROR] 로또 번호는 중복 숫자가 존재해서는 안 됩니다. 종료합니다.",
  NOT_AN_INTEGER: "[ERROR] 로또 번호는 정수만 가능합니다. 종료합니다.",
  BONUS_NOT_A_NUMBER: "[ERROR] 보너스 번호는 숫자이어야 합니다. 종료합니다.",
  BONUS_OUT_OF_RANGE: "[ERROR] 보너스 번호는 1부터 45 사이의 정수이어야 합니다. 종료합니다.",
  BONUS_NOT_AN_INTEGER: "[ERROR] 보너스 번호는 정수만 가능합니다. 종료합니다.",
};
const USER_ERROR = {
  NOT_A_NUMBER: "[ERROR] 로또 구입 금액이 숫자가 아닙니다. 종료합니다.",
  NOT_DIVISIBLE: "[ERROR] 로또 구입 금액이 1,000원으로 나누어 떨어지지 않습니다. 종료합니다.",
  TOO_LARGE: "[ERROR] 로또 구입 금액이 너무 큽니다. 종료합니다.",
  NOT_POSITIVE_INTEGER: "[ERROR] 로또 구입 금액은 양의 정수만 가능합니다. 종료합니다.",
};

module.exports = { LOTTO_ERROR, USER_ERROR };
