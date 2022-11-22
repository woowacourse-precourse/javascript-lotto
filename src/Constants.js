const LOTTO_PRICE = 1000;

const LOTTO_PRIZE = Object.freeze({
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
});

const ERROR_MESSAGE = Object.freeze({
  INVALID_LOTTO_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  INVALID_LOTTO_DUPLICATE: '[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.',
  INVALID_LOTTO_RANGE: '[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.',
  INVALID_INPUT_NOT_NUM: '[ERROR] 숫자를 입력하여야 합니다.',
  INVALID_MONEY_UNIT: `[ERROR] ${LOTTO_PRICE}원 단위로 입력해야 합니다.`,
  BONUS_NUMBER_DUPLICATE: '[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.',
});

module.exports = { LOTTO_PRICE, LOTTO_PRIZE, ERROR_MESSAGE };
