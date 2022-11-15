const INPUT_MESSAGE = {
  SEED_MONEY: "구입금액을 입력해 주세요.\n",
  WINNING_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
};

const STATISTIC_MESSAGE = {
  PURCHASE: (amount) => `\n${amount}개를 구매했습니다.`,
  TITLE: "\n당첨 통계\n---",
  THREE: (count) => `3개 일치 (5,000원) - ${count}개`,
  FOUR: (count) => `4개 일치 (50,000원) - ${count}개`,
  FIVE: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  FIVE_ALPHA: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  SIX: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  EARN: (money) => `총 수익률은 ${money}%입니다.`,
};

const ERROR_MESSAGE = {
  SEED_THOUSAND: "[ERROR] 1000원 단위가 아닙니다.",
  BONUS_RANGE: "[ERROR] 유효 범위 내 숫자가 아닙니다. ",
  BONUS_OVERLAP: "[ERROR] 당첨 번호와 겹치는 숫자입니다.",
  WINNING_SIX: "[ERROR] 입력 개수가 6개가 아닙니다.",
  WINNING_DUPLICATE: "[ERROR] 중복되는 당첨번호가 존재합니다.",
  WINNING_NOT_NUMBER: "[ERROR] 숫자 아닌 입력값이 존재합니다.",
  WINNING_RANGE: "[ERROR] 유효 범위 외 숫자가 존재합니다.",
};

const LOTTO = {
  MIN_RANGE: 1,
  MAX_RANGE: 45,
  WINNING_MAX: 6,
  PERCENT: 100,
  DECIMAL: 1,
  MONEY_UNIT: 1000,
  PRIZE: [5000, 50000, 1500000, 2000000000, 30000000],
};

module.exports = { INPUT_MESSAGE, STATISTIC_MESSAGE, ERROR_MESSAGE, LOTTO };
