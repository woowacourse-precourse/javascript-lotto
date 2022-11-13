const MONEY = {
  MIN: 1000,
};

const PUBLISH = {
  MIN_RANGE: 1,
  MAX_RANGE: 45,
  AMOUNT: 6,
};

const REQUIRE = {
  FIRST: 6,
  SECOND: 5,
  THIRD: 5,
  FOURTH: 4,
  FIFTH: 3,
};

const PRIZE = {
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
};

const INPUT_TEXT = {
  COST: '구입금액을 입력해 주세요.',
  WINNING_NUMBER: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
};

const ERROR_TEXT = {
  MIN_PURCHASE: '[ERROR] 금액은 천원 단위로 입력해주세요.',
  MIN_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  VALUE_BETWEEN: '[ERROR] 1부터 45 사이의 숫자를 입력해주세요.',
  DUPLICATE_VALUE: '[ERROR] 중복되지 않은 번호를 입력해주세요.',
  DUPLICATE_WINNING: '[ERROR] 당첨 번호와 중복되지 않는 숫자를 입력해주세요.',
};

module.exports = { MONEY, PUBLISH, REQUIRE, PRIZE, INPUT_TEXT, ERROR_TEXT };
