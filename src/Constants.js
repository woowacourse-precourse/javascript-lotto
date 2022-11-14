const DEFAULT_PRICE = 1000;
const LOTTO_NUMBER_MIN = 1;
const LOTTO_NUMBER_MAX = 45;
const LOTTO_LENGTH = 6;
const BONUS_COUNT = 0.5;
const BONUS_CHECK = 5;
const PURCHASE_MESSAGE = '구입금액을 입력해 주세요.\n';
const PURCHASE_COUNT_MESSAGE = (purchaseCount) =>
  `${purchaseCount}개를 구매했습니다.`;
const WINNING_NUMBER_MESSAGE = '당첨 번호를 입력해 주세요.\n';
const BONUS_NUMBER_MESSAGE = '보너스 번호를 입력해 주세요.\n';
const WINNING_STATISTICS_MESSAGE = '당첨 통계';
const WINNING_STATISTICS = {
  PLACE_5TH: (winningCount) => `3개 일치 (5,000원) - ${winningCount}개`,
  PLACE_4TH: (winningCount) => `4개 일치 (50,000원) - ${winningCount}개`,
  PLACE_3RD: (winningCount) => `5개 일치 (1,500,000원) - ${winningCount}개`,
  PLACE_2ND: (winningCount) =>
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningCount}개`,
  PLACE_1ST: (winningCount) => `6개 일치 (2,000,000,000원) - ${winningCount}개`,
};
const EARNINGS = {
  YIELD_MESSAGE: (earnings) => `총 수익률은 ${earnings}%입니다.`,
};
const LINE = '---';
const SPACE = '\n';
const WINNING_PRIZE = {
  PLACE_5TH: 5000,
  PLACE_4TH: 50000,
  PLACE_3RD: 1500000,
  PLACE_2ND: 30000000,
  PLACE_1ST: 2000000000,
};
const ERROR_NOT_NUMBER = '[ERROR] 숫자가 아닙니다.';
const ERROR_NOT_BELONG = '[ERROR] 1에서 45 사이의 수가 아닙니다.';
const ERROR_NOT_DIFFERENT = '[ERROR] 중복된 숫자가 있습니다.';
const ERROR_NOT_LENGTH_6 = '[ERROR] 로또 번호는 6개여야 합니다.';
const ERROR_LOWER_1000 = '[ERROR] 1000원 이상 구매해야 합니다.';
const ERROR_NOT_DIVIDE_1000 = '[ERROR] 1000원으로 나누어떨어지지 않습니다.';

module.exports = {
  DEFAULT_PRICE,
  LOTTO_NUMBER_MIN,
  LOTTO_NUMBER_MAX,
  LOTTO_LENGTH,
  BONUS_COUNT,
  BONUS_CHECK,
  PURCHASE_MESSAGE,
  PURCHASE_COUNT_MESSAGE,
  WINNING_NUMBER_MESSAGE,
  BONUS_NUMBER_MESSAGE,
  WINNING_STATISTICS_MESSAGE,
  WINNING_STATISTICS,
  EARNINGS,
  LINE,
  WINNING_PRIZE,
  SPACE,
  ERROR_NOT_NUMBER,
  ERROR_NOT_BELONG,
  ERROR_NOT_DIFFERENT,
  ERROR_NOT_LENGTH_6,
  ERROR_LOWER_1000,
  ERROR_NOT_DIVIDE_1000,
};
