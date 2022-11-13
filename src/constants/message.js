const MESSAGE = {
  INPUT: {
    TOTAL_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
    WINNING_LOTTO_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
    BONUS_LOTTO_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  },
  OUTPUT: {
    WINNING_HISTORY: '\n당첨 통계\n---\n',
    TOTAL_PURCHASE_AMOUNT: (amount) => `${amount}개를 구매했습니다.`,
    MATCH: (ranking, number) =>
      `${ranking.matchCount}개 일치${
        ranking.hasBonusNumber ? ', 보너스 볼 일치' : ''
      } (${ranking.prizeMoney.toLocaleString()}원) - ${number}개`,
    PROFIT_RATE: (profitRate) => `총 수익률은 ${profitRate}%입니다.`,
  },
};

module.exports = Object.freeze(MESSAGE);
