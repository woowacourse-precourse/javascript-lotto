const STATISTIC_KEY = ['THREE', 'FOUR', 'FIVE', 'FIVE_BONUS', 'SIX'];
const MATCH_NUMBER = {
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  FIVE_BONUS: 5,
  SIX: 6,
};
const PRIZE = {
  THREE: 5000,
  FOUR: 50000,
  FIVE: 1500000,
  FIVE_BONUS: 30000000,
  SIX: 2000000000,
};
const INPUT_MESSAGE = {
  AMOUNT: '구입금액을 입력해 주세요.\n',
  WINNING: '\n당첨 번호를 입력해 주세요.\n',
  BONUS: '\n보너스 번호를 입력해 주세요.\n',
  STATISTIC: '\n당첨 통계\n---',
};
module.exports = { STATISTIC_KEY, MATCH_NUMBER, PRIZE, INPUT_MESSAGE };
