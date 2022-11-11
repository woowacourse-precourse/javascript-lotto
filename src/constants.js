const INPUT_MESSAGE = {
  SEED_MONEY: "구입금액을 입력해 주세요.\n",
  WINNING_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
};

const STATISTIC_MESSAGE = {
  TITLE: "\n당첨 통계\n---",
  THREE: "3개 일치 (5,000원)",
  FOUR: "4개 일치 (50,000원)",
  FIVE: "5개 일치 (1,500,000원)",
  FIVE_ALPHA: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  SIX: "6개 일치 (2,000,000,000원)",
  YIELD: "총 수익률은 ",
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

module.exports = { INPUT_MESSAGE, STATISTIC_MESSAGE, ERROR_MESSAGE };
