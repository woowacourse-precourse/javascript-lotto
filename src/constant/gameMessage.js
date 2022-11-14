const HOW_MANY_BUY_LOTTO_MESSAGE = (lottoCount) => `
${lottoCount}개를 구매했습니다.`;
const LOTTO_PRINT = (lottoString) => `[${lottoString}]`;

const BLANK = '';
const LOTTO_COST_INPUT_MESSAGE = '구입금액을 입력해 주세요.\n';
const WIN_NUM_INPUT_MESSAGE = '\n당첨 번호를 입력해 주세요.\n';
const BONUS_NUM_INPUT_MESSAGE = '\n보너스 번호를 입력해 주세요.\n';

const WIN_STATISTICS_MESSAGE = (resultObject, rateOfReturn) => `
당첨통계
---
3개 일치 (5,000원) - ${resultObject['5th']}개
4개 일치 (50,000원) - ${resultObject['4th']}개
5개 일치 (1,500,000원) - ${resultObject['3rd']}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${resultObject['2nd']}개
6개 일치 (2,000,000,000원) - ${resultObject['1st']}개
총 수익률은 ${rateOfReturn}%입니다.`;

module.exports = {
  HOW_MANY_BUY_LOTTO_MESSAGE,
  LOTTO_PRINT,
  WIN_STATISTICS_MESSAGE,
  BLANK,
  LOTTO_COST_INPUT_MESSAGE,
  WIN_NUM_INPUT_MESSAGE,
  BONUS_NUM_INPUT_MESSAGE,
};
