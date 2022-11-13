const MESSAGES = {
  BUYING: {
    SUCCESS: "개를 구매했습니다.",
    UNIT_EXCEPTION: "[ERROR] 구입 금액을 1,000원 단위로 입력해주세요.",
    TYPE_EXCEPTION: "[ERROR] 구입 금액은 반드시 숫자여야 합니다.",
  },
  WINNING_NUMBERS: {
    TYPE_EXCEPTION: "[ERROR] 로또 번호는 모두 정수여야 합니다.",
    COUNT_EXCEPTION: "[ERROR] 로또 번호는 6자리여야 합니다.",
    RANGE_EXCEPTION: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
    DUPLICATION_EXCEPTION: "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
  },
  BONUS_NUMBER: {
    FORMAT_EXCEPTION: "[ERROR] 보너스 번호는 1~45 사이의 정수여야 합니다.",
  },
};

module.exports = { MESSAGES };
