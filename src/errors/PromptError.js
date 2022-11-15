const AppError = require('./AppError');

/**
 * 프롬프트 입력 중 발생하는 에러이다.
 */
class PromptError extends AppError {
  name = 'PromptError';
}

module.exports = PromptError;
