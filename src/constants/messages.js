const GAME_MESSAGES = {
  PURCHASE_MONEY: "구입금액을 입력해 주세요.\n",
  WIN_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
  BONUS: "\n보너스 번호를 입력해 주세요.\n",
  RESULT: "\n당첨 통계\n---",
};

const ERROR_MONEY = {
  NOT_THOUSAND_UNIT: "[ERROR] 1,000원단위로 금액을 입력해야합니다.",
  ZERO: "[ERROR] 0이 아닌 1,000단위로 금액을 입력해야합니다.",
  TYPE_NUMBER: "[ERROR] 숫자를 입력해야합니다.",
  EMPTY: "[ERROR] 공백이 아닌 1,000원단위로 금액을 입력해야합니다.",
  NEGATIVE_INPUT: "[ERROR] 양수의 1,000원단위로 금액을 입력해야합니다.",
};

const ERROR_LOTTO = {
  RANGE: "[ERROR] 로또 번호의 범위는 1~45이어야 합니다.",
  LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  DUPLICATED: "[ERROR] 로또 번호는 중복되지 않은 숫자로 이루어져야 합니다.",
  TYPE: "[ERROR] 로또 번호는 숫자여야 합니다.",
};

const ERROR_BONUS = {
  RANGE: "[ERROR] 보너스 번호의 범위는 1~45여야 합니다.",
  DUPLICATED: "[ERROR] 보너스 번호가 당첨 번호에 포함되어 있습니다.",
  TYPE: "[ERROR] 보너스 번호는 숫자이어야 합니다.",
};

module.exports = {
  GAME_MESSAGES,
  ERROR_MONEY,
  ERROR_LOTTO,
  ERROR_BONUS,
};
