class Validation {
  static isDivisible(number) {
    if (number % 1000 === 0) {
      return true;
    }
    throw new Error("[ERROR] 로또 구입 금액이 1,000원으로 나누어 떨어지지 않습니다. 종료합니다.");
  }

  static isAvailablePurchase(number) {
    if (Number.isSafeInteger(number)) {
      return true;
    }
    throw new Error("[ERROR] 로또 구입 금액이 너무 큽니다. 종료합니다.");
  }
}

module.exports = Validation;
