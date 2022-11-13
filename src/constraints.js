// 콘솔 메시지 목록
const MESSAGES = {
  BUY: "개를 구매했습니다.",
  WIN: "당첨 통계\n---",
  EXCEPTIONS: {
    PURCHASE: {
      UNIT_EXCEPTION: "[ERROR] 구입 금액을 1,000원 단위로 입력해주세요.",
      TYPE_EXCEPTION: "[ERROR] 구입 금액은 반드시 숫자여야 합니다.",
    },
    TYPE_EXCEPTION: "[ERROR] 로또 번호는 정수여야 합니다.",
    COUNT_EXCEPTION: "[ERROR] 로또 번호는 6자리여야 합니다.",
    RANGE_EXCEPTION: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
    DUPLICATION_EXCEPTION: "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
  },
};

// 당첨 번호에 따른 등수와 금액
const REWARDS = {
  FIFTH: 5000,
  FOURTH: 50000,
  THIRD: 1500000,
  SECOND: 30000000,
  FIRST: 2000000000,
};

module.exports = { MESSAGES, REWARDS };
