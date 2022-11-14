class Exception {
  static error(message) {
    return new Error(`[ERROR] ${message}`);
  }
}

module.exports = Exception;
