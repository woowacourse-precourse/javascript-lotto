const MESSAGES = {
  TAKE_MONEY: "구입금액을 입력해 주세요.\n",
  TAKE_WINNING_NUMBERS: "\n당첨번호를 입력해 주세요.\n",
  TAKE_BONUS_NUMBERS: "\n보너스 번호를 입력해 주세요.\n",
  RESULT_TITLE: "\n당첨 통계",
  RESULT_LINE: "---",
};

const RESULT_MESSAGE = {
  COUNT_MESSAGE: (lottoCount) => `${lottoCount}개를 구매했습니다.`,
  WIN_MESSAGES: (winCount, winPrice, count, isBonus) => {
    winPrice = winPrice.toLocaleString();
    return !isBonus
      ? `${winCount}개 일치 (${winPrice}원) - ${count}개`
      : `${winCount}개 일치, 보너스 볼 일치 (${winPrice}원) - ${count}개`;
  },
  REVENUE_MESSAGE: (revenueRate) => {
    revenueRate = revenueRate.toFixed(1);
    return `총 수익률은 ${revenueRate}%입니다.`;
  },
};

const WIN_CONDITIONS = [
  { winCount: 3, checkBonus: false, winPrice: 5000, count: 0 },
  { winCount: 4, checkBonus: false, winPrice: 50000, count: 0 },
  {
    winCount: 5,
    checkBonus: true,
    isBonus: false,
    winPrice: 1500000,
    count: 0,
  },
  {
    winCount: 5,
    checkBonus: true,
    isBonus: true,
    winPrice: 30000000,
    count: 0,
  },
  { winCount: 6, checkBonus: false, winPrice: 2000000000, count: 0 },
];

module.exports = {
  MESSAGES,
  WIN_CONDITIONS,
  RESULT_MESSAGE,
};
