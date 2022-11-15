const AppError = require('./AppError');

class PromptError extends AppError {
  name = 'PromptError';
}

module.exports = PromptError;
