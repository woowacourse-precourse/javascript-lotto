const NUMBER_COUNT = 6;
const AMOUNT_UNIT = 1000;
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;

const MESSAGE = {
  ENTER_PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
  ENTER_WINNING_NUMBERS: "당첨 번호를 입력해 주세요.\n",
  ENTER_BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
  NUMBER_OF_PURCHASE: (count) => `${count}개를 구매했습니다.`,
};

const STATISTICS = {
  TITLE: "당첨 통계\n---",
  FIRST_PRIZE: (count) => `6개 일치 (2,000,000,000원) - ${count}개\n`,
  SECOND_PRIZE: (count) =>
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개\n`,
  THIRD_PRIZE: (count) => `5개 일치 (1,500,000원) - ${count}개\n`,
  FOURTH_PRIZE: (count) => `4개 일치 (50,000원) - ${count}개\n`,
  FIFTH_PRIZE: (count) => `3개 일치 (5,000원) - ${count}개\n`,
  REVENUE: (percentage) => `총 수익률은 ${percentage}%입니다.`,
};

const ERROR = {
  OUT_OF_RANGE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  DUPLICATED: "[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.",
  INVALID_INPUT: "[ERROR] 잘못된 입력입니다.",
  INDIVISIBLE: "[ERROR] 구입금액은 1000원으로 나누어 떨어져야 합니다.",
  NOT_SIX: "[ERROR] 로또 번호는 6개여야 합니다.",
};

Object.freeze(MESSAGE);
Object.freeze(STATISTICS);
Object.freeze(ERROR);

module.exports = {
  NUMBER_COUNT,
  AMOUNT_UNIT,
  MIN_NUMBER,
  MAX_NUMBER,
  MESSAGE,
  STATISTICS,
  ERROR,
};
