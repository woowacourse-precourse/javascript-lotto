const Exception = require('../Exception');

class LottoHasDuplicatedException extends Exception {
  static #ERROR_MESSAGE = '로또 번호에 중복된 값이 포합됩니다.';

  constructor() {
    super(LottoHasDuplicatedException.ERROR_MESSAGE);
  }
}

module.exports = LottoHasDuplicatedException;
