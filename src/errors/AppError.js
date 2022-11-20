const Messages = require('../constants/Messages');

/**
 * 앱 사용중 발생하는 에러는 이 클래스를 사용하거나 상속하여 사용한다.
 */
class AppError extends Error {
  static PREFIX = '[ERROR]';

  /** @type {string} */
  name;

  constructor(message, ...args) {
    super(`${AppError.PREFIX} ${Messages.format(message, ...args)}`);
    this.name = this.constructor.name;
  }
}

module.exports = AppError;
