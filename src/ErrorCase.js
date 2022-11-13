class ErrorCase {
  static isWrongCashInput(cashInput) {
    if (isNaN(cashInput)) return true;

    return false;
  }

  static duplicatedNumbers(numbers) {
    const erasedDuplicated = [...new Set(numbers)];
    if (erasedDuplicated.length !== numbers.length) return true;

    return false;
  }
}

module.exports = ErrorCase;
