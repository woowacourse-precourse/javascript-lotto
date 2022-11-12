const { isDuplicated } = require('./Utils');
const UI = require('./UI');

const ui = new UI();

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      ui.printError('로또 번호는 6개여야 합니다.');
    }
    if (isDuplicated(numbers)) {
      ui.printError('로또 번호가 중복되었습니다.');
    }
  }

  countMatchNumbers(winningNumber, bonusNumber) {
    const matchNumbers = this.#numbers.filter((number) =>
      winningNumber.includes(number),
    );
    if (matchNumbers.length === 5 && this.#numbers.includes(bonusNumber)) {
      return '5B';
    }
    return matchNumbers.length;
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
