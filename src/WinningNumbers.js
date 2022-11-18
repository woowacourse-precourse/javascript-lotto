const { LOTTO, ERROR, REGEXP } = require('./constant');

class WinningNumbers {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  validate(numbers) {
    numbers.forEach((number) => {
      const isNumbersAndCommas = REGEXP.number.test(String(number));
      if (!isNumbersAndCommas) throw new Error(ERROR.winningNumbers);
    });

    if (numbers.length > 6) throw new Error(ERROR.winningNumbers);

    // const numbers = number.split(',').map(Number);
    const hasDuplicates = numbers.length !== new Set(numbers).size;
    if (hasDuplicates) throw new Error(ERROR.winningNumbers);

    const sortedNumbers = numbers.sort((a, b) => a - b);
    const firstNumber = sortedNumbers[0];
    const lastNumber = sortedNumbers[sortedNumbers.length - 1];
    const isInRange = LOTTO.rangeStart <= firstNumber && lastNumber <= LOTTO.rangeEnd;
    if (!isInRange) throw new Error(ERROR.winningNumbers);
  }
}

module.exports = WinningNumbers;
