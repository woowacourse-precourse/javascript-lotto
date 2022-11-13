class CustomError extends Error {
  constructor(message) {
    super(`[ERROR] ${message}`);
    this.name = 'PriceError';
  }
}

module.exports = CustomError;
