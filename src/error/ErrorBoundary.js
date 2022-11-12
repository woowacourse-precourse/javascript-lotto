const ErrorLogger = require('./ErrorLogger');

const ErrorBoundary = class {
  constructor() {
    this.errorLogger = new ErrorLogger();
  }
};

module.exports = ErrorBoundary;
