const DEFAULT_PRICE = 1000;
const LOTTO_NUMBER_MIN = 1;
const LOTTO_NUMBER_MAX = 45;
const LOTTO_LENGTH = 6;
const PURCHASE_MESSAGE = '구입금액을 입력해 주세요.';
const PURCHASE_COUNT_MESSAGE = (purchaseCount) =>
  `${purchaseCount}개를 구매했습니다.`;
const WINNING_NUMBER_MESSAGE = '당첨 번호를 입력해 주세요.';
const BONUS_NUMBER_MESSAGE = '보너스 번호를 입력해 주세요.';
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

module.exports = {
  DEFAULT_PRICE,
  LOTTO_NUMBER_MIN,
  LOTTO_NUMBER_MAX,
  LOTTO_LENGTH,
  PURCHASE_MESSAGE,
  PURCHASE_COUNT_MESSAGE,
  WINNING_NUMBER_MESSAGE,
  BONUS_NUMBER_MESSAGE,
  WINNING_STATISTICS_MESSAGE,
  WINNING_STATISTICS,
  EARNINGS,
};
