const ErrorLogger = class {
  constructor(callback) {
    this.callback = callback;
    return new Proxy(this, handler);
  }

  onCallback() {
    const { status, message } = callback();
    if (status === false) {
      throw new Error(message);
    }
  }

  catchAllError(error) {
    throw new Error(`[Error] ${error.message}`);
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

export default ErrorLogger;
