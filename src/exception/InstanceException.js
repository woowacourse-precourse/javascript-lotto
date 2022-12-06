const Exception = require('./Exception');

class InstanceException extends Exception {
  static #ERROR_MESSAGE = '인스턴스가 다릅니다.';

  constructor() {
    super(InstanceException.#ERROR_MESSAGE);
  }
}

module.exports = InstanceException;
