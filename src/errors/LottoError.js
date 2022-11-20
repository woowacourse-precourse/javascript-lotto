const AppError = require('./AppError');

/**
 * 로또와 관련된 로직 수행 중 발생하는 에러이다.
 */
class LottoError extends AppError {}

module.exports = LottoError;
