const ErrorLogger = class {
  constructor() {
    return new Proxy(this, handler);
  }

  onCallback(callback) {
    const { status, message } = callback();
    if (!status) {
      throw new Error(message);
    }
  }

  catchAllError(error) {
    throw new Error(`[ERROR] ${error.message}`);
  }
};

const handler = {
  get(target, prop) {
    return !ErrorLogger.prototype.hasOwnProperty(prop)
      ? target[prop]
      : (...args) => {
          try {
            target[prop].apply(this, args);
          } catch (error) {
            target.catchAllError(error);
          }
        };
  },
};

module.exports = ErrorLogger;
