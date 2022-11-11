const { isDuplicated, printError } = require('./Utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      printError('로또 번호는 6개여야 합니다.');
    }
    if (isDuplicated(numbers)) {
      printError('로또 번호가 중복되었습니다.');
    }
  }

  countMatchNumbers(winningNumber) {
    const matchNumbers = this.#numbers.filter((number) =>
      winningNumber.includes(number),
    );
    return matchNumbers.length;
  }
}

module.exports = Lotto;
