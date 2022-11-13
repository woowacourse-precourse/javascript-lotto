const { print } = require('../lib/Utils');
const Input = require('.');
const WinNumbersValidation = require('../Validation/WinNumbersValidation');

class Lotto extends Input {
  #numbers;

  constructor(answer) {
    super(answer);
    const stringAnswer = typeof answer === 'string' ? answer : JSON.stringify(answer);
    Lotto.validate(stringAnswer);
    this.save(stringAnswer);
  }

  static validate(answer) {
    const winNumberValidate = new WinNumbersValidation(answer);
    return winNumberValidate.validate();
  }

  save(answer) {
    const winNumberArray = answer.split(',');
    this.#numbers = winNumberArray.map((number) => Number(number));

    return print('\n');
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
