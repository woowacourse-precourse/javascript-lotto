const LOTTO_PRICE = 1000;
const LOTTO_LENGTH = 6;
const LOTTO_MIN = 1;
const LOTTO_MAX = 45;

const LOTTO_MESSAGE = {
  BUDGET: "구입금액을 입력해 주세요.\n",
  BUYING: function (count) {
    return count + "개를 구매했습니다.";
  },
  WIN_NUM: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUM: "보너스 번호를 입력해 주세요.\n",
};
const BUDGET_ERROR_MESSAGE = {
  NON_NUMBER: "[ERROR] 구매 금액은 숫자만 입력해 주세요.",
  INDIVISIBLE: "[ERROR] 1000원 단위로 입력해 주세요.",
  SHORT_OF_MONEY: "[ERROR] 최소 금액은 1000원 입니다.",
};

const LOTTO_ERROR = {
  LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  REPEAT: "[ERROR] 중복된 번호는 사용할 수 없습니다.",
  RANGE: `[ERROR] 로또 번호는 ${LOTTO_MIN} 이상 ${LOTTO_MAX} 이하 이어야 합니다.`,
  NUM: "[ERROR] 로또 번호는 숫자만 입력해 주세요.",
};

const RESULT_COUNT = {
  THREE: 3,
  THREE_PRIZE: 5000,
  FOUR: 4,
  FOUR_PRIZE: 50000,
  FIVE: 5,
  FIVE_PRIZE: 1500000,
  FIVE_BONUS: 6,
  FIVE_BONUS_PRIZE: 30000000,
  SIX: 6,
  SIX_PRIZE: 2000000000,
};

const RESULT_CORRECT = {
  STAT: "당첨 통계\n---",
  THREE: function (count) {
    return "3개 일치 (5,000원) - " + count + "개";
  },
  FOUR: function (count) {
    return "4개 일치 (50,000원) - " + count + "개";
  },
  FIVE: function (count) {
    return "5개 일치 (1,500,000원) - " + count + "개";
  },
  FIVE_BONUS: function (count) {
    return "5개 일치, 보너스 볼 일치 (30,000,000원) - " + count + "개";
  },
  SIX: function (count) {
    return "6개 일치 (2,000,000,000원) - " + count + "개";
  },

  YIELD: function (percent) {
    return "총 수익률은 " + percent + "%입니다.";
  },
};

module.exports = {
  LOTTO_PRICE,
  LOTTO_LENGTH,
  LOTTO_MIN,
  LOTTO_MAX,
  LOTTO_MESSAGE,
  BUDGET_ERROR_MESSAGE,
  LOTTO_ERROR,
  RESULT_COUNT,
  RESULT_CORRECT,
};
