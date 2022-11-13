const ErrorLogger = require('./ErrorLogger');

const ErrorBoundary = class {
  constructor() {
    this.errorLogger = new ErrorLogger();
  }

  setup(value) {
    const validateValueCallback = () => this.validate(value);
    this.errorLogger.onCallback(validateValueCallback);
  }

  validate(value) {}

  static getErrorMessage() {}
};

module.exports = ErrorBoundary;
