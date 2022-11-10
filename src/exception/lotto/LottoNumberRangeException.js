const Exception = require('../Exception');

class LottoNumberRangeException extends Exception {
  static #ERROR_MESSAGE = '로또 번호는 6개로 이루어져야 합니다.';

  constructor(length) {
    super(`${LottoNumberRangeException.#ERROR_MESSAGE} ${length}개`);
  }
}

module.exports = LottoNumberRangeException;
