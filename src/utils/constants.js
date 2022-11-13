const LOTTO_PRICE = 1000;

const RANGE_OF_LOTTO_NUMBER = {
  MIN: 1,
  MAX: 45,
};

const TOTAL_COUNTS = 6;

const ERROR_MESSAGES = {
  PRICE: '[ERROR] 구입 금액은 1000원 단위의 숫자로 입력해야 합니다.',
  WINNING_NUMS: `[ERROR] 당첨 번호는 중복되지 않는 1 ~ 45 사이의 숫자 6개를 ','로 구분하여 입력해야 합니다.`,
  BOUNS_NUM: `[ERROR] 보너스 번호는 당첨 번호와 중복되지 않는 1 ~ 45 사이의 숫자 1개를 입력해야 합니다.`,
};

module.exports = {
  LOTTO_PRICE,
  RANGE_OF_LOTTO_NUMBER,
  TOTAL_COUNTS,
  ERROR_MESSAGES,
};
