const LOTTO = {
  LOTTO_PRICE: 1000,
  LOTTO_LENGTH: 6,
  FIRST_PRIZE: 2000000000,
  SECOND_PRIZE: 30000000,
  THIRD_PRIZE: 1500000,
  FOURTH_PRIZE: 50000,
  FIFTH_PRIZE: 5000,
};

const MESSAGE = {
  GUIDE: {
    ENTER_MONEY: "구입금액을 입력해주세요.\n",
    ENTER_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
    ENTER_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
    SUCCESS_TO_PURCHASE: (n) => `\n${n}개를 구매했습니다.\n`,
    WINNING_STATICS_LIST: (prizeList) =>
      `\n당첨 통계\n---\n3개 일치 (5,000원) - ${prizeList.fifthPrize}개
4개 일치 (50,000원) - ${prizeList.fourthPrize}개
5개 일치 (1,500,000원) - ${prizeList.thirdPrize}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${prizeList.secondPrize}개
6개 일치 (2,000,000,000원) - ${prizeList.firstPrize}개\n`,
    EARNINGS_RATE: (n) => `총 수익률은 ${n}%입니다.`,
  },

  ERROR: {
    OUT_OF_RANGE: "[ERROR] 로또 번호는 6개여야 합니다.",
    NOT_DUPLICATED: "[ERROR] 중복되지 않는 숫자를 입력해주세요.",
    NUMBERS_IN_RANGE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  },
};
module.exports = { LOTTO, MESSAGE };
