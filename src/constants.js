const ERROR_MESSAGES = Object.freeze({
  MONEY_RANGE: "[ERROR] 1000원 이상 입력해주세요.",
  MONEY_UNIT: "[ERROR] 1000원 단위로 입력해주세요.",
  MONEY_VALUE: "[ERROR] 금액은 숫자여야 합니다.",
  LOTTO_LENGTH: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  LOTTO_COUNT: "[ERROR] 로또 번호는 6개여야 합니다.",
  LOTTO_DUPLICATION: "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
});

module.exports = {
  ERROR_MESSAGES,
};
