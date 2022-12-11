const Exception = require('../Exception');

class LottoLengthException extends Exception {
  constructor(length) {
    super(LottoLengthException.#getErrorMessage(length));
  }

  static #getErrorMessage(length) {
    return `로또의 크기는 ${length}이어야 합니다.`;
  }
}

module.exports = LottoLengthException;
