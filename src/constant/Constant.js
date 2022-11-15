const INPUT = {
  MONEY: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBER: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
};

const PRINT = {
  LOTTO_COUNT: (count) => `${count}개를 구매했습니다.`,
  STATISTICS: `당첨 통계\n---`,
  STATISTICS_RESULT: (totalCount, reward, userCount) =>
    `${totalCount}개 일치 (${reward}원) - ${userCount}개`,
  STATISTICS_RESULT_BONUS: (totalCount, reward, userCount) =>
    `${totalCount}개 일치, 보너스 볼 일치 (${reward}원) - ${userCount}개`,
  STATISTICS_YIELD: (profit) => `총 수익률은 ${profit}%입니다.`,
};

const LOTTO = {
  PRICE: 1000,
  TOTAL_COUNT: 6,
  MIN: 1,
  MAX: 45,
};

const PRIZE = {
  FIRST: {
    MONEY: 2000000000,
    TOTAL_COUNT: 6,
    REWARD: '2,000,000,000',
  },
  SECOND: { MONEY: 30000000, TOTAL_COUNT: 5, REWARD: '30,000,000' },
  THIRD: { MONEY: 1500000, TOTAL_COUNT: 5, REWARD: '1,500,000' },
  FOURTH: { MONEY: 50000, TOTAL_COUNT: 4, REWARD: '50,000' },
  FIFTH: { MONEY: 5000, TOTAL_COUNT: 3, REWARD: '5,000' },
};

module.exports = {
  INPUT,
  PRINT,
  LOTTO,
  PRIZE,
};
