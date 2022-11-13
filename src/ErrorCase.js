const processWinningNumbersInput = (input) => {
  return input
    .split(" ")
    .join("")
    .split(",")
    .map((number) => parseInt(number))
    .filter((number) => !isNaN(number))
    .filter((number) => number >= 1 && number <= 45)
    .filter((number) => number === Math.floor(number));
};

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

  static isWrongWinningNumbersInput(winningNumbersInput) {
    const processed = processWinningNumbersInput(winningNumbersInput);
    if (processed.length !== 6) return true;

    const isDuplicated = ErrorCase.duplicatedNumbers(processed);
    if (isDuplicated) return true;

    return false;
  }

  static isWrongBonusNumberInput(bonusNumberInput) {
    if (isNaN(bonusNumberInput)) return true;

    if (bonusNumberInput < 1 || bonusNumberInput > 45) return true;

    if (bonusNumberInput !== Math.floor(bonusNumberInput)) return true;

    return false;
  }

  static isDuplicatedBonusNumber(winningNumbers, bonusNumber) {
    if (winningNumbers.includes(bonusNumber)) return true;

    return false;
  }
}

module.exports = ErrorCase;
