const Exception = require('../Exception');

class LottoNumberRangeException extends Exception {
  constructor(range) {
    super(LottoNumberRangeException.#getErrorMessage(range));
  }

  static #getErrorMessage({ min, max }) {
    return `로또 번호는 ${min}부터 ${max}사이 숫자여야 합니다.`;
  }
}

module.exports = LottoNumberRangeException;
