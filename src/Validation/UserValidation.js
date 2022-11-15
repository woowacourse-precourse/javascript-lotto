class UserValidation {
  static isNumber(number) {
    if (isNaN(number)) {
      throw new Error("[ERROR] 로또 구입 금액이 1,000원으로 나누어 떨어지지 않습니다. 종료합니다.");
    }
  }
  static isDivisible(number) {
    number = Number(number);
    if (number % 1000 !== 0) {
      throw new Error("[ERROR] 로또 구입 금액이 1,000원으로 나누어 떨어지지 않습니다. 종료합니다.");
    }
  }

  static isUnderMaxPurchase(number) {
    number = Number(number);
    if (!Number.isSafeInteger(number)) {
      throw new Error("[ERROR] 로또 구입 금액이 너무 큽니다. 종료합니다.");
    }
  }

  static isPositiveInteger(number) {
    number = Number(number);
    if (number > 0 && Number.isInteger(number)) {
      return true;
    }
    throw new Error("[ERROR] 로또 구입 금액은 양의 정수만 가능합니다. 종료합니다.");
  }
}

module.exports = UserValidation;
