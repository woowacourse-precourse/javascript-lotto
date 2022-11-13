class Validation {
  static isDivisible(number) {
    if (number % 1000 === 0) {
      return true;
    }
    return false;
  }
}

module.exports = Validation;
