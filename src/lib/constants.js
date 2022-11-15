const MESSAGE = Object.freeze({
  AMOUNT: "구입금액을 입력해 주세요.\n",
  WIN_NUMBERS: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
  DIVIDER: "당첨 통계\n---",
});

const LOTTO = Object.freeze({
  PRICE: 1000,
  MIN: 1,
  MAX: 45,
  COUNT: 6,

  PRIZE: Object.freeze({
    3: 5000,
    4: 50000,
    5: 1500000,
    BONUS: 30000000,
    6: 2000000000,
  }),
});

AWARDS_ORDER = [3, 4, 5, "BONUS", 6];

module.exports = { MESSAGE, LOTTO, AWARDS_ORDER };
