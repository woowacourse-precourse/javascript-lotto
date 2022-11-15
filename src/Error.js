const { LOTTO } = require('./Setting');

const ERROR = Object.freeze({
  PREFIX: '[ERROR]',
  FORMAT: '입력 형식이 올바르지 않습니다.',
  PURCHASE_AMOUNT: `로또 구입 금액은 ${LOTTO.PRICE}으로 나누어 떨어지는 양수여야 합니다.`,
  NUMBER_COUNT: `로또 번호는 ${LOTTO.NUMBER_COUNT}개여야 합니다.`,
  NUMBER_DUPLICATE: '로또 번호는 중복되지 않아야 합니다.',
  NUMBER_RANGE: `로또 번호는 ${LOTTO.MIN_NUMBER}부터 ${LOTTO.MAX_NUMBER} 사이의 숫자여야 합니다.`,
});

const REG_EXP = Object.freeze({
  NUMBER_ONLY: /^\d+$/,
});

class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class InputError extends MyError {}

module.exports = {
  ERROR,
  REG_EXP,
  InputError,
};
