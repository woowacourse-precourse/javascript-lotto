const RULES = Object.freeze({
  START_RANGE: 1,
  END_RANGE: 45,
  LENGTH: 6,
  PURCHASE_UNIT: 1000,
});

const PRIZE = Object.freeze({
  MONEY: [2000000000, 30000000, 1500000, 50000, 5000],
});

const CONSOLE = Object.freeze({
  PURCHASE_MONEY_INPUT: "구입금액을 입력해 주세요.",
  WINNING_NUMBER_INPUT: "당첨 번호를 입력해 주세요.",
  BONUS_NUMBER_INPUT: "보너스 번호를 입력해 주세요.",
  RESULT: "당첨 통계\n---",
});

const RESULT = {
  PURCHASE_CHECK: (num) => `${String(num)}개를 구매했습니다.`,
  FIFTH_PLACE: (num) => `3개 일치 (5,000원) - ${String(num)}개`,
  FOURTH_PLACE: (num) => `4개 일치 (50,000원) - ${String(num)}개`,
  THIRD_PLACE: (num) => `5개 일치 (1,500,000원) - ${String(num)}개`,
  SECOND_PLACE: (num) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${String(num)}개`,
  FIRST_PLACE: (num) => `6개 일치 (2,000,000,000원) - ${String(num)}개`,
  TOTAL_PER: (percent) => `총 수익률은 ${String(percent)}%입니다.`,
};

const ERROR = Object.freeze({
  INPUT_NUMBER_CHECK: "[ERROR] 구입금액은 숫자(정수)로만 입력해주세요",
  INPUT_UNIT_CHECK: "[ERROR] 구입금액은 1,000원 단위로 입력해주세요.",
  INPUT_BLANK_CHECK: "[ERROR] 구입금액은 공백을 포함하지 않고 입력해주세요",
  INPUT_NOVALUE_CHECK: "[ERROR] 구입금액은 빈 값이 올 수 없습니다.",
  WINNING_NUMBER_RANGE_CHECK: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  WINNING_NUMBER_COUNT_CHECK: "[ERROR] 숫자는 6개만 입력해주세요.",
  BONUS_CHECK: "[ERROR] 1개의 숫자만 입력해주세요.",
  DUPLICATE_CHECK: "[ERROR] 중복되지 않는 수들로 작성해주세요.",
});

module.exports = { RULES, PRIZE, CONSOLE, RESULT, ERROR };
