const MESSAGES = {
  BUYING: {
    SUCCESS: "개를 구매했습니다.",
    UNIT_EXCEPTION: "[ERROR] 구입 금액을 1,000원 단위로 입력해주세요.",
    TYPE_EXCEPTION: "[ERROR] 구입 금액은 반드시 숫자여야 합니다.",
  },
  WINNING_NUMBER: {
    EXCEPTION: "[ERROR] 당첨 번호를 올바르게 입력해주세요.",
  },
  BONUS_NUMBER: {
    FORMAT_EXCEPTION: "[ERROR] 보너스 번호는 1~45 사이의 정수여야 합니다.",
  },
};

module.exports = { MESSAGES };
