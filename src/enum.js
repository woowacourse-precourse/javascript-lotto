const LOTTO_STATUS = {
  LENGTH: 6,
  MIN: 1,
  MAX: 45,
};

const PRIZE = {
  FIRST_PRIZE: 2000000000,
  SECOND_PRIZE: 30000000,
  THIRD_PRIZE: 1500000,
  FOURTH_PRIZE: 50000,
  FIFTH_PRIZE: 5000,
};

const MESSAGES = {
  PURCHASE_PRICE_MESSAGE: "구입금액을 입력해 주세요.\n",
  LOTTO_COUNT_MESSAGE: "개를 구매했습니다.\n",
  WINNING_NUMBER_MESSAGE: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER_MESSAGE: "보너스 번호를 입력해 주세요.\n",
};

const ERROR_MESSAGES = {
  LENGTH_ERROR: `[ERROR] 로또 번호는 ${LOTTO_STATUS.LENGTH}개여야 합니다.`,
  INPUT_ERROR: "[ERROR] 숫자만 입력할 수 있습니다.",
  RANGE_ERROR: `[ERROR] 로또 번호는 ${LOTTO_STATUS.MIN}부터${LOTTO_STATUS.MAX}사이의 숫자여야 합니다.`,
  OVERLAP_ERROR: "[ERROR] 로또 번호는 중복되어서는 안됩니다.",
  COST_ERROR: "[ERROR] 1,000원 단위로 입력해야합니다.",
};

module.exports = {
  LOTTO_STATUS,
  PRIZE,
  MESSAGES,
  ERROR_MESSAGES,
};
