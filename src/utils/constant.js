const COMMAND = Object.freeze({
  BUY: "구입금액을 입력해 주세요.",
  WIN: "당첨 번호를 입력해 주세요.",
  BONUS: "보너스 번호를 입력해 주세요",
});

const GUIDE = Object.freeze({
  PURCHASE: "개를 구매했습니다.",
  RESULT: "당첨 통계",
  LINE: "---",
  PROFIT: "총 수익률은 $%입니다.",
  PCS: "개",
});

const PLACE = Object.freeze({
  FIFTH: "3개 일치 (5,000원) - ",
  FOURTH: "4개 일치 (50,000원) - ",
  THIRD: "5개 일치 (1,500,000원) - ",
  SECOND: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  FIRST: "6개 일치 (2,000,000,000원) - ",
});

const ERROR = Object.freeze({
  PURCHASE_AMOUNT: "[ERROR] 구매 금액은 1000원 단위로 입력하셔야 합니다.",
  WINNING_NUMBER: "[ERROR] 올바른 당첨 번호를 입력해주세요.",
  NUMBER_RANGE: "[ERROR] 1~45 의 숫자만 입력할 수 있습니다.",
  BONUS_NUMBER: "[ERROR] 올바른 보너스 번호를 입력해주세요.",
});

const UNIT = Object.freeze({
  NUM_RANGE: /[1-45]/,
  MONETARY: 1000,
  LOTTO_LENGTH: 6,
  BONUS_LENGTH: 1,
});

module.exports = { COMMAND, GUIDE, PLACE, ERROR, UNIT };
