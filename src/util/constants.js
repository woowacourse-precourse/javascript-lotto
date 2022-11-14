const LOTTO_PURCHASE_PRICE = 1000;
const INPUT_MESSAGE = {
  PURCHASE_PRICE: "구입금액을 입력해 주세요.\n",
  WIN_NUMBER: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
};
const ERROR_MESSAGE = {
  PRICE_NUMBER: "[ERROR] 구매금액은 숫자여야 합니다.",
  LOTTO_COUNT: "[ERROR] 로또 번호는 6개여야 합니다.",
  BONUS_NUMBER: "[ERROR] 보너스 번호는 숫자여야 합니다.",
};
const RESULT_MESSAGE = {
  RETURN_LOTTO_COUNT: (cnt) => `${cnt}개를 구매했습니다.`,
};
const STATISTIC = {
  WINNING_STATISTIC: "당첨 통계\n---",
  TOTAL_PROFIT: (n) => `총 수익률은 ${n}%입니다.`,
};
const PRIZE_KEY = ["THREE", "FOUR", "FIVE", "FIVE_BONUS", "SIX"];
const PRIZE_REWARD = {
  THREE: 5000,
  FOUR: 50000,
  FIVE: 1500000,
  FIVE_BONUS: 30000000,
  SIX: 2000000000,
};
const PRIZE_RESULT = {
  THREE: (n) => `3개 일치 (5,000원) - ${n}개`,
  FOUR: (n) => `4개 일치 (50,000원) - ${n}개`,
  FIVE: (n) => `5개 일치 (1,500,000원) - ${n}개`,
  FIVE_BONUS: (n) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${n}개`,
  SIX: (n) => `6개 일치 (2,000,000,000원) - ${n}개`,
};

module.exports = {
  LOTTO_PURCHASE_PRICE,
  INPUT_MESSAGE,
  ERROR_MESSAGE,
  RESULT_MESSAGE,
  PRIZE_KEY,
  PRIZE_REWARD,
  PRIZE_RESULT,
  STATISTIC,
};
