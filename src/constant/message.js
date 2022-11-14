const INPUT_MONEY_MESSAGE = "구입 금액을 입력해 주세요. \n";
const INPUT_WIN_NUMBER_MESSAGE = "\n당첨 번호를 입력해 주세요.\n";
const CONSOLE_MESSAGE = {
  INPUT_MONEY_MESSAGE,
  INPUT_WIN_NUMBER_MESSAGE,
};

const NOT_RIGHT_UNIT = "[ERROR] 1000원 단위로 구매하실 수 있습니다.";
const REQUIRE_INPUT = "[ERROR] 구입하실 금액을 입력해주세요.";
const INCLUDED_SPACE = "[ERROR] 구입 금액에 공백이 포함될 수 없습니다.";
const NOT_PLUS_INPUT = "[ERROR] 0보다 큰 금액을 입력해 주세요.";
const AMOUNT_ERROR_MESSAGE = {
  NOT_RIGHT_UNIT,
  REQUIRE_INPUT,
  INCLUDED_SPACE,
  NOT_PLUS_INPUT,
};

const NOT_SIX_NUMBERS = "[ERROR] 로또 번호는 6개여야 합니다.";
const NOT_IN_RANGE = "[ERROR] 1부터 45까지의 숫자를 입력해주세요.";
const DUPLICATED_NUMBERS = "[ERROR] 당첨 번호에 중복된 숫자가 존재합니다.";
const DUPLICATED_WITH_WIN_NUMBER =
  "[ERROR] 당첨 번호와 중복된 숫자는 입력할 수 없습니다.";
const LOTTO_NUM_ERROR_MESSAGE = {
  NOT_SIX_NUMBERS,
  NOT_IN_RANGE,
  DUPLICATED_NUMBERS,
  DUPLICATED_WITH_WIN_NUMBER,
};

module.exports = {
  CONSOLE_MESSAGE,
  AMOUNT_ERROR_MESSAGE,
  LOTTO_NUM_ERROR_MESSAGE,
};
