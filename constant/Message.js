const MESSAGE = Object.freeze({
  INSERT_MONEY: "구매금액을 입력해 주세요.\n",
  INPUT_WINNINGNUMBERS: "\n당첨 번호를 입력해 주세요.\n",
  INPUT_BONUSNUMBER: "\n보너스 번호를 입력해 주세요.\n",
  PRINT_AMOUNT: "개를 구매했습니다.",
  STATS: "\n당첨 통계\n---",
  REWARD_HEAD: "총 수익률은 ",
  REWARD_TAIL: "입니다.",

  ERROR_AMOUNT: "[ERROR] 구매금액은 1000원 이상이어야 합니다.",
  ERROR_DIVIDE: "[ERROR] 1000원으로 나누어 떨어져야 합니다.",

  ERROR_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  ERROR_RANGE: "[ERROR] 1 ~ 45 범위에 있어야 합니다.",
  ERROR_DUPLICATE: "[ERROR] 중복된 숫자가 있습니다.",

  ERROR_BONUS_LENGTH: "[ERROR] 숫자 1개만 입력하세요.",
  ERROR_BONUS_RANGE: "[ERROR] 1 ~ 45 범위에 있어야 합니다.",
  ERROR_BONUS_DUPLICATE:
    "[ERROR] 보너스 번호는 당첨 번호에 속하지 않아야 합니다.",
});

const CONSTANTS = Object.freeze({
  ONE_THOUSAND: 1000,
  ZERO: 0,
  MIN_LOTTO: 1,
  MAX_LOTTO: 45,
  START_REWARD_COUNT: 3,
  LOTTO_MAX_COUNT: 6,
  BONUS_INDEX: 7,
  TWELVE: 12,
});

const RANK = Object.freeze([
  "",
  "",
  "",
  "3개 일치 (5,000원) - ",
  "4개 일치 (50,000원) - ",
  "5개 일치 (1,500,000원) - ",
  "6개 일치 (2,000,000,000원) - ",
  "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
]);

const REWARD = [0, 0, 0, 5000, 50000, 1500000, 2000000000, 30000000];

module.exports = { MESSAGE, CONSTANTS, RANK, REWARD };
