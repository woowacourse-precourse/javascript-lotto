const MESSAGES = {
  ENTER_PURCHASE_AMOUNT: "구입 금액을 입력해 주세요.\n",
  INPUT_WINNING_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
  INPUT_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
  LOTTO_STATS: "\n당첨 통계\n---",
};

const ERROR_MESSAGES = {
  INVALID_AMOUNT_TYPE: "[ERROR] 구입 금액은 숫자만 입력해야 합니다.",
  INVALID_AMOUNT_UNIT: "[ERROR] 구입 금액은 1000원 단위여야 합니다.",
  INVALID_NUMBER: "[ERROR] 로또 번호는 6개여야 합니다.",
  INVALID_RANGE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  DUPLICATION_NUMBERS: "[ERROR] 로또 번호는 중복이 없어야 합니다.",
};

const LOTTO = {
  PRICE: 1000,
  NUMBER: 6,
  BONUS: 1,
  MAX_RANGE: 45,
  MIN_RANGE: 1,
};
const LOTTO_RANK = {
  firstPlace: 6,
  secondPlace: 5,
  thirdPlace: 5,
  fourthPlace: 4,
  fifthPlace: 3,
};

const LOTTO_PRIZE = {
  boom: 0,
  firstPlace: 2000000000,
  secondPlace: 30000000,
  thirdPlace: 1500000,
  fourthPlace: 50000,
  fifthPlace: 5000,
};

const LOTTO_STATS_MESSAGES = {
  TOTAL_PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
};

module.exports = {
  MESSAGES,
  ERROR_MESSAGES,
  LOTTO,
  LOTTO_RANK,
  LOTTO_PRIZE,
  LOTTO_STATS_MESSAGES,
};
