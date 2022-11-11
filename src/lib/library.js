const LOTTO = {
  PRICE: 1000,
};

const INPUT = {
  BUY: "구입금액을 입력해 주세요.",
  WIN_NUMBER: "당첨 번호를 입력해 주세요.",
  BONUS: "보너스 번호를 입력해 주세요.",
};

const PRINT = {
  BUY: (count) => `${count}개를 구매했습니다.`,
  RESULT: "당첨 통계\n ---\n",
  GAIN_PECENT: (percent) => `총 수익률은 ${percent}%입니다.`,
};

const WINNING = {
  MENT: {
    FIRST: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
    SECOND: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
    THIRD: (count) => `5개 일치 (1,500,000원) - ${count}개`,
    FOURTH: (count) => `4개 일치 (50,000원) - ${count}개`,
    FIFTH: (count) => `3개 일치 (5,000원) - ${count}개`,
  },

  PRICE: {
    FIRST: 2000000000,
    SECOND: 30000000,
    THIRD: 1500000,
    FOUTH: 50000,
    FIFTH: 5000,
  },
};

module.exports = { LOTTO, INPUT, PRINT, WINNING };
