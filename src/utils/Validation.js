class Validation {
  static throwError(condition, errorMsg) {
    if (condition) {
      throw new Error(errorMsg);
    }
  }
}

module.exports = Validation;
