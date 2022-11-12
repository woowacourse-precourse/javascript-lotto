const { PRIZE, MATCH } = require('./winning number');

const MESSAGE = Object.freeze({
  PURCHASE_INPUT: '구입금액을 입력해 주세요.\n',
  PURCHASE_COUNT: (num) => `\n${num}개를 구매했습니다.`,
  WINNING_INPUT: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_INPUT: '\n보너스 번호를 입력해 주세요.\n',

  WINNINT_STATISTICS: '\n당첨 통계',
  HYPHENS: '---',
  FIFTH: `${MATCH.THREE}개 일치 (${PRIZE.FIFTH}) - `,
  FOURTH: `${MATCH.FOUR}개 일치 (${PRIZE.FOURTH}) - `,
  THIRD: `${MATCH.FIVE}개 일치, 보너스 볼 일치 (${PRIZE.THIRD}) - `,
  SECOND: `${MATCH.FIVE}개 일치 (${PRIZE.SECOND}) - `,
  FIRST: `${MATCH.SIX}개 일치 (${PRIZE.FIRST}) - `,
  YIELD: (yieldRate) => `총 수익률은 ${yieldRate}%입니다.`,
});

module.exports = MESSAGE;
