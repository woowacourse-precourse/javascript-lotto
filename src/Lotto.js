const { print } = require('./lib/Utils');
const WinNumbersValidation = require('./Validation/WinNumbersValidation');

class Lotto {
  #numbers;

  constructor(answer) {
    const stringAnswer = typeof answer === 'string' ? answer : JSON.stringify(answer);
    Lotto.winNumberValidate(stringAnswer);
    this.saveWinNumbers(stringAnswer);
  }

  static winNumberValidate(answer) {
    const winNumberValidate = new WinNumbersValidation(answer);
    return winNumberValidate.validate();
  }

  saveWinNumbers(answer) {
    const winNumberArray = answer.split(',');
    this.#numbers = winNumberArray.map((number) => Number(number));

    return print('\n');
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
