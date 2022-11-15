const { LOTTO } = require('./Constants');
const UI = require('./UI');
const Validation = require('./Validation');

const ui = new UI();
const validation = new Validation();

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    try {
      validation.checkArrayLength(numbers, LOTTO.LENGTH);
      validation.checkDuplication(numbers);
    } catch (error) {
      ui.printError(error);
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
