const { checkLottoNumbersValidation, checkBonusNumberValidation } = require('./utils/validations');
const { changeToNumbersArray } = require('./utils/lotteryHandler');
const { NUMBER } = require('./utils/constant');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    const numbersArray = changeToNumbersArray(numbers);
    this.#numbers = { numbers: numbersArray, bonusNumber: NUMBER.DEFAULT_BONUS_NUMBER };
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
