const Messages = require('../constants/Messages');

class AppError extends Error {
  static PREFIX = '[ERROR]';

  name = 'AppError';

  constructor(message, ...args) {
    super(`${AppError.PREFIX} ${Messages.format(message, ...args)}`);
  }
}

module.exports = AppError;
