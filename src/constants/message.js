const ASK = Object.freeze({
  PAYMENT: '구입금액을 입력해 주세요.',
  WIN_NUMBERS: '당첨 번호를 입력해 주세요.',
  WIN_BONUS: '보너스 번호를 입력해 주세요.',
});

const ERROR = Object.freeze({
  LOTTO_PRICE: '[ERROR] 1000원 단위의 금액만 입력하세요.',
  ONLY_NUMBER: '[ERROR] 숫자만 입력해주세요.',
  LOTTO_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  NO_DUPLICATE: '[ERROR] 중복되지 않는 숫자를 입력해주세요.',
  NUMBER_IN_RANGE: '[ERROR] 1부터 45까지의 숫자만 입력해주세요.',
});

const ALERT = Object.freeze({
  STATISTICS_PREFIX: '당첨 통계',
});

module.exports = { ASK, ERROR, ALERT };
