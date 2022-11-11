const {
  checkLottoNumbersValidation,
  checkBonusNumberValidation,
} = require('./utils/validations');
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

  get numbers() {
    return this.#numbers;
  }

  setBonusNumber(inputNumber) {
    checkBonusNumberValidation(inputNumber, this.#numbers.numbers);
    this.#numbers.bonusNumber = Number(inputNumber);
  }
}

module.exports = Lotto;
