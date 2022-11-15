const COMMAND = Object.freeze({
  BUY: "구입금액을 입력해 주세요.",
  WIN: "당첨 번호를 입력해 주세요.",
  BONUS: "보너스 번호를 입력해 주세요",
});

const GUIDE = Object.freeze({
  PURCHASE: "개를 구매했습니다.",
  TITLE: "당첨 통계",
  TOTAL_PROFIT: "총 수익률은",
  PERCENT: "%입니다.",
  WON: "원",
  PCS: "개",
  LINE: "---",
  BAR: "-",
});

const ERROR = Object.freeze({
  PURCHASE_AMOUNT: "[ERROR] 구입 금액은 1000원 단위로 입력하셔야 합니다.",
  WIN_NUMBER: "[ERROR] 올바른 당첨 번호를 입력해주세요.",
  NUMBER_RANGE: "[ERROR] 1~45 의 숫자만 입력할 수 있습니다.",
  BONUS_NUMBER: "[ERROR] 올바른 보너스 번호를 입력해주세요.",
  WIN_NUMBER_DUPLICATE:
    "[ERROR] 로또 번호는 서로 다른 6개의 1~45 이내의 숫자여야 합니다.",
  BONUS_NUMBER_DUPLICATE: "[ERROR] 보너스 번호는 당첨번호와 중복되면 안됩니다.",
});

const RANK = Object.freeze({
  1: "FIRST",
  2: "SECOND",
  3: "THIRD",
  4: "FOURTH",
  5: "FIFTH",
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
  FIFTH: 5,
});

const CORRECT = Object.freeze({
  1: "6개 일치",
  2: "5개 일치, 보너스 볼 일치",
  3: "5개 일치",
  4: "4개 일치",
  5: "3개 일치",
});

const UNIT = Object.freeze({
  MONETARY: 1000,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  MIN_CNT: 3,
  LOTTO_LENGTH: 6,
  WIN_NUMBER_CNT: 6,
  BONUS_LENGTH: 1,
  DEFAULT: 0,
  STORAGE_SPACE: [],
  ALLOW: false,
  NOT_ALLOW: true,
});

const PRIZE_MONEY = Object.freeze({
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
});

module.exports = {
  COMMAND,
  GUIDE,
  CORRECT,
  ERROR,
  UNIT,
  RANK,
  PRIZE_MONEY,
};
