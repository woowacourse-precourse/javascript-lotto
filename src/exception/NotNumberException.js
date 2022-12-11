const Exception = require('./Exception');

class NotNumberException extends Exception {
  static #ERROR_MESSAGE = '입력 값이 숫자가 아닙니다.';

  constructor(number) {
    super(`${NotNumberException.#ERROR_MESSAGE} ${number}`);
  }
}

module.exports = NotNumberException;
