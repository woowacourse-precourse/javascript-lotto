const ERROR = Object.freeze({
  LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  DUPLICATE: '[ERROR] 로또 번호는 중복되지 않아야 합니다.',
  PURCHASABLE: '[ERROR] 로또는 1000원 이상부터 구매 가능합니다',
  DIVISIBLE: '[ERROR] 로또 구입 금액은 1000원 단위여야 합니다.',
});

const CONDITION = Object.freeze({
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  LOTTO_LENGTH: 6,
  LOTTO_PRICE: 1000,
});

module.exports = { ERROR, CONDITION };
