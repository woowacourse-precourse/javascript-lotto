const PHRASE = {
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
};

const ERROR = {
  PURCHASE_AMOUNT_UNIT: '[ERROR] 구입 금액은 1,000원 단위여야 합니다.',
  PURCHASE_AMOUNT_TYPE: '[ERROR] 구입 금액은 숫자여야 합니다.',

  LOTTO_NUMBER_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  LOTTO_NUMBER_RANGE: '[ERROR] 로또 번호는 1이상 45이하여야 합니다.',
  LOTTO_NUMBER_OVERLAP: '[ERROR] 로또 번호는 서로 중복되지 않는 숫자여야 합니다.',
};

const LOTTO = {
  NUMBERS_COUNT: 6,
  MAX_NUMBER: 45,
  MIN_NUMBER: 1,
};

module.exports = { PHRASE, ERROR, LOTTO };
