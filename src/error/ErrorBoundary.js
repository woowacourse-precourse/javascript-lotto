const ErrorLogger = require('./ErrorLogger');

const ErrorBoundary = class {
  constructor() {
    this.errorLogger = new ErrorLogger();
  }

  validateInput(value) {
    const validateValueCallback = () => this.validate(value);
    this.errorLogger.onCallback(validateValueCallback);
  }

  validate(value) {}

  getErrorMessage() {}
};

module.exports = ErrorBoundary;
