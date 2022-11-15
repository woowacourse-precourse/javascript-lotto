const LOTTO_PURCHASE = "구입금액을 입력해 주세요.";
const WINNING_NUMBER = "당첨 번호를 입력해 주세요.";
const BONUS_NUMBER = "보너스 번호를 입력해 주세요.";

const REQUEST_MESSAGE = {
  LOTTO_PURCHASE,
  WINNING_NUMBER,
  BONUS_NUMBER,
};

const LOTTO_NOT_SIX = "[ERROR] 번호는 6개여야 합니다.";
const DATA_DUPLICATION = "[ERROR] 중복된 데이터가 있습니다.";
const STRING_INCLUDE = "[ERROR] 문자열이 포함되었습니다.";
const MONNEY_UNIT = "[ERROR] 1000원 단위로 입력해주세요";
const NOT_NUMBER = "[ERROR] 숫자를 입력해주세요.";

const ERROR_MESSAGE = {
  LOTTO_NOT_SIX,
  DATA_DUPLICATION,
  STRING_INCLUDE,
  MONNEY_UNIT,
  NOT_NUMBER,
};

module.exports = { REQUEST_MESSAGE, ERROR_MESSAGE };
