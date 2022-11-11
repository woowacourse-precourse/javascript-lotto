const Exception = require('../Exception');

class LottoAmountNotNumberException extends Exception {
  static #ERROR_MESSAGE = '로또 구입 금액이 숫자가 아닙니다.';

  constructor(number) {
    super(`${LottoAmountNotNumberException.#ERROR_MESSAGE} ${number}`);
  }
}

module.exports = LottoAmountNotNumberException;
