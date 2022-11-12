const Exception = require('./Exception');

class InstanceException extends Exception {
  constructor(instance) {
    super(InstanceException.#getErrorMessage(instance));
  }

  static #getErrorMessage(instance) {
    return `인스턴스가 ${instance}가 아닙니다.`;
  }
}

module.exports = InstanceException;
