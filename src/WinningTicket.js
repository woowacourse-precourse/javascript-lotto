const Validation = require('./Validation');
const UI = require('./UI');
const { LOTTO_END, LOTTO_START, LOTTO_NUMBER_COUNT } = require('./Constants');

const validation = new Validation();
const ui = new UI();

class WinningTicket {
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.#winningNumbers = [];
    this.#bonusNumber = 0;
  }

  validateWinningNumbers(numbers) {
    try {
      validation.checkArrayLength(numbers, LOTTO_NUMBER_COUNT);
      validation.checkDuplication(numbers);
      numbers.forEach((number) => {
        validation.checkPositiveInteger(number);
        validation.checkNumberIncludeInRange(number, LOTTO_START, LOTTO_END);
      });
    } catch (error) {
      ui.printError(error);
    }
  }

  validateBonusNumber(number) {
    try {
      validation.checkPositiveInteger(number);
      validation.checkNumberIncludeInRange(number, LOTTO_START, LOTTO_END);
      validation.checkDuplication([...this.#winningNumbers, number]);
    } catch (error) {
      ui.printError(error);
    }
  }

  setWinningNumbers(numbers) {
    this.validateWinningNumbers(numbers);
    this.#winningNumbers = numbers;
  }

  setBonusNumber(number) {
    this.validateBonusNumber(number);
    this.#bonusNumber = number;
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

module.exports = WinningTicket;
