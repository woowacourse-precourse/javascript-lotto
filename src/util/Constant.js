const LOTTO_PRICE = 1000;
const LOTTO_COUNT = 6;
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

const WINNING_LOTTO_ERROR = {
  LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  REPEAT: "[ERROR] 중복된 번호는 사용할 수 없습니다.",
  RANGE: `[ERROR] 로또 번호는 ${LOTTO_MIN} 이상 ${LOTTO_MAX} 이하 이어야 합니다.`,
  NUM: "[ERROR] 로또 번호는 숫자만 입력해 주세요.",
};

module.exports = {
  LOTTO_PRICE,
  LOTTO_COUNT,
  LOTTO_MIN,
  LOTTO_MAX,
  LOTTO_MESSAGE,
  BUDGET_ERROR_MESSAGE,
  WINNING_LOTTO_ERROR,
};
