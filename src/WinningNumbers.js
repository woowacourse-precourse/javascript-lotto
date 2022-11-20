const { LOTTO, ERROR, REGEXP } = require('./constant');

class WinningNumbers {
  #numbers;

  constructor(input) {
    this.validate(input);
    this.#numbers = input.split(',').map(Number);
  }

  validate(input) {
    const isNumbersAndCommas = REGEXP.winningNumbers.test(input);
    if (!isNumbersAndCommas) throw new Error(ERROR.winningNumbers);

    const numbers = input.split(',').map(Number);
    const hasDuplicates = numbers.length !== new Set(numbers).size;
    if (hasDuplicates) throw new Error(ERROR.winningNumbers);

    const sortedNumbers = numbers.sort((a, b) => a - b);
    const firstNumber = sortedNumbers[0];
    const lastNumber = sortedNumbers[sortedNumbers.length - 1];
    const isInRange = LOTTO.rangeStart <= firstNumber && lastNumber <= LOTTO.rangeEnd;
    if (!isInRange) throw new Error(ERROR.winningNumbers);
  }

  get() {
    return this.#numbers;
  }
}

module.exports = WinningNumbers;
