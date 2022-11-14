const LOTTO_PRICE = 1000;

const RANGE_OF_LOTTO_NUMBER = {
  MIN: 1,
  MAX: 45,
};

const TOTAL_COUNTS = 6;

const ERROR_MESSAGES = {
  PRICE: "[ERROR] 구입 금액은 1000원 단위의 숫자로 입력해야 합니다.",
  WINNING_NUMS: `[ERROR] 당첨 번호는 중복되지 않는 1 ~ 45 사이의 숫자 6개를 ','로 구분하여 입력해야 합니다.`,
  BOUNS_NUM: `[ERROR] 보너스 번호는 당첨 번호와 중복되지 않는 1 ~ 45 사이의 숫자 1개를 입력해야 합니다.`,
};

const INITIAL_STATICS = {
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  "5andBonus": 0,
};

const WINNING_PRICES = {
  3: 5000,
  4: 50000,
  5: 1500000,
  6: 2000000000,
  "5andBonus": 30000000,
};

const ADD_COMMA_EXP = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;

module.exports = {
  LOTTO_PRICE,
  RANGE_OF_LOTTO_NUMBER,
  TOTAL_COUNTS,
  ERROR_MESSAGES,
  INITIAL_STATICS,
  WINNING_PRICES,
  ADD_COMMA_EXP,
};
