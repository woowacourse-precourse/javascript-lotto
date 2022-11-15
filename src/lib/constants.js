const MESSAGE = Object.freeze({
  AMOUNT: "구입금액을 입력해 주세요.\n",
  WIN_NUMBERS: "당첨 번호를 입력해 주세요.",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
  DIVIDER: "당첨 통계\n---",
  PURCHASE: (amount) => `${amount}개를 구매했습니다.`,
  EARNING_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,

  STATISTICS: {
    3: "3개 일치",
    4: "4개 일치",
    5: "5개 일치",
    BONUS: "5개 일치, 보너스 볼 일치",
    6: "6개 일치",
  },
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

module.exports = { MESSAGE, LOTTO };
