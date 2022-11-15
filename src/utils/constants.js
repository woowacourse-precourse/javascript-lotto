const NUMBER_COUNT = 6;
const AMOUNT_UNIT = 1000;
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;

const REWARD = {
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
};

const MESSAGE = {
  ENTER_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  ENTER_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  ENTER_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
  QUANTITY_OF_PURCHASE: count => `${count}개를 구매했습니다.`,
};

const STATISTICS = {
  TITLE: '당첨 통계\n---\n',
  FIRST_PRIZE: count => `6개 일치 (2,000,000,000원) - ${count}개\n`,
  SECOND_PRIZE: count => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개\n`,
  THIRD_PRIZE: count => `5개 일치 (1,500,000원) - ${count}개\n`,
  FOURTH_PRIZE: count => `4개 일치 (50,000원) - ${count}개\n`,
  FIFTH_PRIZE: count => `3개 일치 (5,000원) - ${count}개\n`,
  REVENUE: percentage => `총 수익률은 ${percentage}%입니다.`,
};

Object.freeze(REWARD);
Object.freeze(MESSAGE);
Object.freeze(STATISTICS);

module.exports = {
  NUMBER_COUNT,
  AMOUNT_UNIT,
  MIN_NUMBER,
  MAX_NUMBER,
  REWARD,
  MESSAGE,
  STATISTICS,
};
