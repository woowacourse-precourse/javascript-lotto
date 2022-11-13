const INPUT_MONEY_MESSAGE = "구입 금액을 입력해 주세요. \n";

const CONSOLE_MESSAGE = {
  INPUT_MONEY_MESSAGE,
};

const NOT_RIGHT_UNIT = "[ERROR] 1000원 단위로 구매하실 수 있습니다.";
const REQUIRE_INPUT = "[ERROR] 구입하실 금액을 입력해주세요.";
const INCLUDED_SPACE = "[ERROR] 구입 금액에 공백이 포함될 수 없습니다.";
const ERROR_MESSAGE = {
  NOT_RIGHT_UNIT,
  REQUIRE_INPUT,
  INCLUDED_SPACE,
};

module.exports = { CONSOLE_MESSAGE, ERROR_MESSAGE };
