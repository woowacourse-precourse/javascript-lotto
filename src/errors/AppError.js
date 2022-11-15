class AppError extends Error {
  static PREFIX = '[ERROR]';

  name = 'AppError';

  constructor(message) {
    super(`${AppError.PREFIX} ${message}`);
  }
}

module.exports = AppError;
