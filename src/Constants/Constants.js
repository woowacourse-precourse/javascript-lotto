const MESSAGES = {
  ENTER_PURCHASE_AMOUNT: "구입 금액을 입력해 주세요.\n",
  INPUT_WINNING_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
};

const ERROR_MESSAGES = {
  INVALID_AMOUNT_UNIT: "[ERROR] 구입 금액은 1000원 단위여야 합니다.",
};

const LOTTO = {
  PRICE: 1000,
  NUMBER: 6,
  MAX_RANGE: 45,
  MIN_RANGE: 1,
};

module.exports = { MESSAGES, ERROR_MESSAGES, LOTTO };
