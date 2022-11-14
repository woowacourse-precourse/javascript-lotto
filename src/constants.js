const RANK = Object({
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  UN_RANK: -1,
});

const UI_MESSAGES = Object.freeze({
  PLEASE_MONEY: "구입금액을 입력해 주세요.\n",
  PLEASE_WINNING_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
  PLEASE_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
  BUY: "개를 구매했습니다.",
  RANK_TO_MESSAGES: Object.freeze({
    [RANK.ONE]: "6개 일치 (2,000,000,000원)",
    [RANK.TWO]: "5개 일치, 보너스 볼 일치 (30,000,000원)",
    [RANK.THREE]: "5개 일치 (1,500,000원)",
    [RANK.FOUR]: "4개 일치 (50,000원)",
    [RANK.FIVE]: "3개 일치 (5,000원)",
  }),
});

const ERROR_MESSAGES = Object.freeze({
  MONEY_RANGE: "[ERROR] 1000원 이상 입력해주세요.",
  MONEY_UNIT: "[ERROR] 1000원 단위로 입력해주세요.",
  MONEY_VALUE: "[ERROR] 금액은 숫자여야 합니다.",
  LOTTO_LENGTH: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  LOTTO_COUNT: "[ERROR] 로또 번호는 6개여야 합니다.",
  LOTTO_DUPLICATION: "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
});

module.exports = {
  UI_MESSAGES,
  ERROR_MESSAGES,
  RANK,
};
