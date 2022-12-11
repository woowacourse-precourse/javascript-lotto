const Exception = require('../Exception');

class LottoAmountDivideException extends Exception {
  constructor(amount) {
    super(LottoAmountDivideException.#getErrorMessage(amount));
  }

  static #getErrorMessage(amount) {
    return `로또 구입 금액이 ${amount}원으로 나누어 떨어지지 않습니다.`;
  }
}

module.exports = LottoAmountDivideException;
