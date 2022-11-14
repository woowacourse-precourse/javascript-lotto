const PURCHASEAMOUNT_INPUT = "구입금액을 입력해 주세요.";
const WINNERNUMBER_INPUT = "당첨 번호를 입력해 주세요.";
const BONUSNUMBER_INPUT = "보너스 번호를 입력해 주세요.";

const PURCHASEAMOUNT_UNDIVIDED =
  "[ERROR] 구입 금액이 로또 가격으로 나누어 떨어지지 않습니다.";
const NOT_ONLY_NUMBER = "[ERROR] 숫자만 입력하실 수 있습니다.";
const NOT_UNIQUE_NUMBER = "[ERROR] 중복된 숫자가 있습니다.";
const SIZE_INVALID = "[ERROR] 로또의 크기는 6 이어야 합니다.";
const NOT_IN_RANGE = "[ERROR] 로또 번호는 1이상 45이하의 숫자만 가능합니다.";

const LOTTO_PRICE = 1000;
const LOTTO_SIZE = 6;
const LOTTO_MIN_NUMBER = 1;
const LOTTO_MAX_NUMBER = 45;

const GUIDE_MESSAGE = {
  PURCHASEAMOUNT_INPUT,
  WINNERNUMBER_INPUT,
  BONUSNUMBER_INPUT,
};
const ERROR_MESSAGE = {
  PURCHASEAMOUNT_UNDIVIDED,
  NOT_ONLY_NUMBER,
  NOT_UNIQUE_NUMBER,
  SIZE_INVALID,
  NOT_IN_RANGE,
};

module.exports = {
  GUIDE_MESSAGE,
  ERROR_MESSAGE,
  LOTTO_PRICE,
  LOTTO_SIZE,
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
};
