const LOTTO = Object.freeze({
  PRICE: 1000,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  LENGTH: 6,
  TOTAL_RANK: 5,
  MATCH: [3, 4, 5, 5, 6],
  PRIZE: [5000, 50000, 1500000, 30000000, 2000000000],
  RANK: {
    FIRST: 4,
    SECOND: 3,
    THIRD: 2,
    FOURTH: 1,
    FIFTH: 0
  }
});
const MESSAGE = Object.freeze({
  INPUT_MONEY: '구입금액을 입력해 주세요.\n',
  PURCHASE_RESULT: (number) => `\n${number}개를 구매했습니다.`,
  INPUT_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  RESULT: '\n당첨 통계\n---',
  WIN: (match, bonus = '', prize, count) => `${match}개 일치${bonus} (${prize}원) - ${count}개`,
  RATES_OF_RETURN: (number) => `총 수익률은 ${number}%입니다.`
});
const REGEX = Object.freeze({
  NUMBER: /^\d+$/
});

module.exports = {
  LOTTO,
  MESSAGE,
  REGEX
};
