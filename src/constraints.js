// 콘솔 메시지 목록
const MESSAGES = {
  BUY: "개를 구매했습니다.",
  STATISTICS: {
    INIT: "당첨 통계\n---",
    FIFTH: "3개 일치 (5,000원) - ",
    FOURTH: "4개 일치 (50,000원) - ",
    THIRD: "5개 일치 (1,500,000원) - ",
    SECOND: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
    FIRST: "6개 일치 (2,000,000,000원) - ",
  },
  EXCEPTIONS: {
    PURCHASE: {
      UNIT_EXCEPTION: "[ERROR] 구입 금액을 1,000원 단위로 입력해주세요.",
      TYPE_EXCEPTION: "[ERROR] 구입 금액은 숫자여야 합니다.",
    },
    TYPE_EXCEPTION: "[ERROR] 로또 번호는 숫자여야 합니다.",
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

// 당첨금 테이블 생성용 상수
const REWARDS_TABLE = [
  ["FIFTH", 0],
  ["FOURTH", 0],
  ["THIRD", 0],
  ["SECOND", 0],
  ["FIRST", 0],
];

module.exports = { MESSAGES, REWARDS, REWARDS_TABLE };
