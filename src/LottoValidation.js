class LottoValidation {
  static checkNumber(numbers) {}
  static UNIT(numbers, divisor) {
    if (Number(numbers) % divisor !== 0) {
      throw new Error(ERROR_MESSAGE.divisible);
    }
  }
  static checkZero(numbers) {
    if (input === "0") {
      throw new Error(ERROR_MESSAGE.zero);
    }
  }
  static checkLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.length);
    }
  }
  static checkRange(numbers) {}
  static checkDuplicate(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.duplicate);
    }
  }
  static checkBonusDuplicate(numbers) {
    if (winningNumbers.includes(number)) {
      throw new Error(ERROR_MESSAGE.bonusDuplicate);
    }
  }
}
