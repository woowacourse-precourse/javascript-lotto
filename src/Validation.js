class Validation {
  static checkPurchaseAmount(amount) {
    if (amount < 0) {
      throw new Error("[ERROR] 구입 금액은 0보다 커야 합니다.");
    }

    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위여야 합니다.");
    }

    return true;
  }
}

module.exports = Validation;
