const INPUT_MESSAGE = {
  PURCHASE: "구입금액을 입력해 주세요.\n",
  WINNING_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
};

const ERROR_MESSAGE_WINNING_NUMBER = {
  LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  RANGE: "[ERROR] 로또 번호의 범위는 1부터 45까지여야 합니다.",
  TYPE: "[ERROR] 로또 번호는 숫자로만 이루어져야 합니다.",
  DUPLICATION: "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
};

const ERROR_MESSAGE_BONUS_NUMBER = {
  TYPE: "[ERROR] 보너스 번호는 숫자여야 합니다.",
  RANGE: "[ERROR] 보너스 번호의 범위는 1부터 45까지여야 합니다.",
  DUPLICATION: "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.",
};

const ERROR_MESSAGE_PURCHASE_AMOUNT = {
  TYPE: "[ERROR] 구매금액은 숫자로 입력해야 합니다.",
  UNIT: "[ERROR] 구매금액은 1000원 단위로 입력해야 합니다.",
  RANGE: "[ERROR] 구매금액은 0원 이상이어야 합니다.",
};

module.exports = {
  INPUT_MESSAGE,
  ERROR_MESSAGE_WINNING_NUMBER,
  ERROR_MESSAGE_BONUS_NUMBER,
  ERROR_MESSAGE_PURCHASE_AMOUNT,
};
