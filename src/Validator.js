class Validator {
  static validateTotalPurchaseAmount(totalPurchaseAmount) {
    return this.isNaturalNumber(totalPurchaseAmount) && this.isThousands(totalPurchaseAmount);
  }

  static isNaturalNumber(value) {
    return /^\d+$/.test(value);
  }

  static isThousands(value) {
    return value % 1000 === 0;
  }
}

module.exports = Validator;
