class Validation {
  static isValidPurchaseAmount(amount) {
    if (amount < 0) {
      throw new Error("[ERROR] 구입 금액은 0원이상이어야 합니다.");
    }

    if (typeof amount !== "number") {
      throw new Error("[ERROR] 구입 금액은 숫자여야 합니다.");
    }

    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위여야 합니다.");
    }

    return true;
  }

  static isValidWinningNumber(winningNumbers) {
    const winningNumbersArray = winningNumbers.split(",").map(Number);

    if (winningNumbersArray.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }

    if (new Set(winningNumbersArray).size !== 6) {
      throw new Error("[ERROR] 당첨 번호는 중복되지 않아야 합니다.");
    }

    winningNumbersArray.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 당첨 번호는 1~45 사이의 숫자여야 합니다.");
      }

      if (isNaN(number)) {
        throw new Error("[ERROR] 당첨 번호는 숫자여야 합니다.");
      }
    });

    return true;
  }

  static isValidLottoArray(lotto) {}
  static isValidBonusNumber(bonusNumber) {}
}

module.exports = Validation;
