const Exception = require('../Exception');

class LottoAmountLessException extends Exception {
  static #getErrorMessage(amount) {
    return `로또 구입 금액이 ${amount}보다 작습니다.`;
  }

  constructor(amount) {
    super(LottoAmountLessException.#getErrorMessage(amount));
  }
}

module.exports = LottoAmountLessException;
