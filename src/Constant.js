const LOTTO_MIN_BOUND = 1;
const LOTTO_MAX_MOUND = 45;
const LOTTO_COUNT = 6;
const LOTTO_PRICE = 1000;

const INIT_WINNING_COUNT = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
};

const WINNING_AMOUNT = {
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
};

const NOT_INTEGER = '[ERROR] 입력한 값이 정수값이 아닙니다. ';
const NOT_LOTTO_PRICE_UNIT = `[ERROR] 입력 금액이 ${LOTTO_PRICE}원 단위가 아닙니다.`;
const NOT_NUMBER_DIVISION = '[ERROR] 입력값이 숫자가 아닙니다.';
const VALID_INPUT_FAIL = '[ERROR] 잘못된 입력입니다. ';
const IS_DUPLICATE = '[ERROR] 중복된 값이 있습니다. ';
const VALID_LIST_LENGTH_MSG = '[ERROR] 리스트의 길이가 잘못되었습니다.  ';
const VALID_LOTTO_COUNT_MSG = `[ERROR] 로또 번호의 길이는 ${LOTTO_COUNT}개여야 합니다`;

module.exports = {
  LOTTO_MIN_BOUND,
  LOTTO_MAX_MOUND,
  LOTTO_COUNT,
  LOTTO_PRICE,
  INIT_WINNING_COUNT,
  WINNING_AMOUNT,
  NOT_INTEGER,
  NOT_LOTTO_PRICE_UNIT,
  NOT_NUMBER_DIVISION,
  VALID_INPUT_FAIL,
  IS_DUPLICATE,
  VALID_LIST_LENGTH_MSG,
  VALID_LOTTO_COUNT_MSG,
};
