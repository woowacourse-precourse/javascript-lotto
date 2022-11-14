const LOTTO_PRICE = 1000;

const LOTTO_MESSAGE = {
  BUDGET: "구입금액을 입력해 주세요.\n",
  BUYING: function (count) {
    return count + "개를 구매했습니다.";
  },
  WIN_NUM: "당첨 번호를 입력해 주세요.",
  BONUS_NUM: "보너스 번호를 입력해 주세요.",
};
const BUDGET_ERROR_MESSAGE = {
  NON_NUMBER: "[ERROR] 구매 금액은 숫자만 입력해 주세요.",
  INDIVISIBLE: "[ERROR] 1000원 단위로 입력해 주세요.",
  SHORT_OF_MONEY: "[ERROR] 최소 금액은 1000원 입니다.",
};
module.exports = { LOTTO_MESSAGE, BUDGET_ERROR_MESSAGE, LOTTO_PRICE };
