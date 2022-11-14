const MESSAGES = {
  ENTER_PURCHASE_AMOUNT: "구입 금액을 입력해 주세요.\n",
  INPUT_WINNING_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
  INPUT_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.",
};

const ERROR_MESSAGES = {
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

module.exports = { MESSAGES, ERROR_MESSAGES, LOTTO };
