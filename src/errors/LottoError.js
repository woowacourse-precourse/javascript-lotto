const AppError = require('./AppError');

class LottoError extends AppError {
  name = 'LottoError';
}

module.exports = LottoError;
