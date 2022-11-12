class ErrorCase {
  static isWrongCash(cashInput) {
    if (isNaN(cashInput)) return true;

    return false;
  }
}

module.exports = ErrorCase;
