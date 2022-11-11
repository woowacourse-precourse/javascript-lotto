const { checkLottoNumbersValidation } = require('./utils/validations');
const { changeToNumbersArray } = require('./utils/lotteryHandler');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    const numbersArray = changeToNumbersArray(numbers);
    this.#numbers = { numbers: numbersArray, bonusNumber: 0 };
  }

  validate(numbers) {
    checkLottoNumbersValidation(numbers);
  }

  set numbers(numbers) {
    checkLottoNumbersValidation(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
