const MESSAGE = {
  INPUT_BUYING_AMOUNT: "구입금액을 입력해 주세요\n",
  BUYING_LOTTO_NUMBER: "개를 구매했습니다.",
  INPUT_WINNING_NUMBER: "당첨 번호를 입력해 주세요.\n",
  INPUT_BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
};

const ERROR = {
  HAS_BLANK: "[ERROR] 입력값에 공백이 포함되어 있습니다.",
  NOT_NUMBER: "[ERROR] 입력값에 숫자 이외의 문자가 있습니다.",
  NOT_DIVISIBLE: "[ERROR] 구입 금액이 1000원 단위로 나누어 떨어지지 않습니다",
  IS_ZERO_WON: "[ERROR] 구입 금액이 0원입니다.",
  NOT_SIX_NUMBER: "[ERROR] 당첨 번호가 6자리가 아닙니다.",
  DUPLICATE_NUMBER: "[ERROR] 당첨 번호에 중복 숫자가 있습니다.",
  OVER_NUMBER_IN_RANGE: "[ERROR] 입력 번호 중에서 45초과의 숫자가 있습니다.",
  UNDER_NUMBER_IN_RANGE: "[ERROR] 입력 번호 중에서 1미만의 숫자가 있습니다.",
  CONTAINS_BLANKS: "[ERROR] 입력 번호에 공백문자가 포함되어 있습니다.",
  HAS_CHARACTER: "[ERROR] 입력 번호에 문자가 포함되어 있습니다.",
};

const RULE = {
  DIVISOR: 1000,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  SELECT_NUMBER: 6,
};

module.exports = { MESSAGE, ERROR, RULE };
