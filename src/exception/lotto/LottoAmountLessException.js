const Exception = require('../Exception');

class LottoAmountLessException extends Exception {
  constructor(amount) {
    super(LottoAmountLessException.#getErrorMessage(amount));
  }

  static #getErrorMessage(amount) {
    return `로또 구입 금액이 ${amount}보다 작습니다.`;
  }
}

module.exports = LottoAmountLessException;
