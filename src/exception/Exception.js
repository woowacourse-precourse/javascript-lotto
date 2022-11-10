class Exception extends Error {
  static #PREFIX = '[ERROR]';

  constructor(message) {
    super(`${Exception.#PREFIX} ${message}`);
  }
}

module.exports = Exception;
