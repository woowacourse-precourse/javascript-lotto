const { checkLottoNumbersValidation, checkBonusNumberValidation } = require('./utils/validations');
const { NUMBER } = require('./constants/value');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = { numbers, bonusNumber: NUMBER.DEFAULT_BONUS_NUMBER };
  }

  validate(numbers) {
    checkLottoNumbersValidation(numbers);
  }

  get numbers() {
    return this.#numbers;
  }

  setBonusNumber(inputNumber) {
    checkBonusNumberValidation(inputNumber, this.#numbers.numbers);
    this.#numbers.bonusNumber = Number(inputNumber);
  }
}

module.exports = Lotto;
