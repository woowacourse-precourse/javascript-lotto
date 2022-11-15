const ERROR = '[ERROR]';
const BUYLOTTO = '구입금액을 입력해 주세요.\n';
const WINNUMBER = '\n당첨 번호를 입력해 주세요.\n';
const BONUS = '\n보너스 번호를 입력해 주세요.\n';
const ANALYTIC = '\n당첨 통계\n---';
const MESSAGE = {
  ERROR,
  BUYLOTTO,
  WINNUMBER,
  BONUS,
  ANALYTIC,
};

const GRADE = {
  FIFTH: 5,
  FOURTH: 4,
  THIRD: 3,
  SECOND: 2,
  FIRST: 1,
};

const REWARD = {
  5: '5,000',
  4: '50,000',
  3: '1,500,000',
  2: '30,000,000',
  1: '2,000,000,000',
};

const CORRECT = {
  5: '3개 일치',
  4: '4개 일치',
  3: '5개 일치',
  2: '5개 일치, 보너스 볼 일치',
  1: '6개 일치',
};

module.exports = { GRADE, REWARD, CORRECT, MESSAGE };
