const GAME_MESSAGES = {
  PURCHASE_MONEY: "구입금액을 입력해 주세요.\n",
};

const ERROR_MONEY = {
  NOT_THOUSAND_UNIT: "[ERROR] 1,000원단위로 금액을 입력해야합니다.",
  ZERO: "[ERROR] 0이 아닌 1,000단위로 금액을 입력해야합니다.",
  TYPE_NUMBER: "[ERROR] 숫자를 입력해야합니다.",
  EMPTY: "[ERROR] 공백이 아닌 1,000원단위로 금액을 입력해야합니다.",
  NEGATIVE_INPUT: "[ERROR] 양수의 1,000원단위로 금액을 입력해야합니다.",
};

module.exports = {
  GAME_MESSAGES,
  ERROR_MONEY,
};
