class Validation {
  static isValidPurchaseAmount(amount) {
    if (amount < 0) {
      throw new Error("[ERROR] 구입 금액은 0보다 커야 합니다.");
    }

    if (isNaN(amount)) {
      throw new Error("[ERROR] 구입 금액은 숫자여야 합니다.");
    }

    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위여야 합니다.");
    }

    return true;
  }

  static isValidWinningNumber(winningNumbers) {}
  static isValidLottoArray(lotto) {}
}

module.exports = Validation;
