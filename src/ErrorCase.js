class ErrorCase {
  static isWrongCashInput(cashInput) {
    if (isNaN(cashInput)) return true;

    return false;
  }
}

module.exports = ErrorCase;
