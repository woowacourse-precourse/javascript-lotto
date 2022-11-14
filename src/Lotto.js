const Utils = require("./Utils");
const { ERROR_MESSAGES, LOTTO_INFO_VALUES } = require("./Constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.utils = new Utils();
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (typeof numbers !== 'undefined') {
      this.validateNumbersLength(numbers);
      this.isOverlapNumbers(numbers);
      this.validateEachLottoNumber(numbers);
    }
  }

  validateNumbersLength(numbers) {
    (numbers.length !== LOTTO_INFO_VALUES.NUMBER_OF_WINNING_NUMBER &&
      this.utils.throwError(ERROR_MESSAGES.ERROR_WINNING_NUMBER));
  }

  isOverlapNumbers(numbers) {
    (new Set(numbers).size !== LOTTO_INFO_VALUES.NUMBER_OF_WINNING_NUMBER &&
      this.utils.throwError(ERROR_MESSAGES.ERROR_OVERLAP));
  }

  validateEachLottoNumber = (numbers) => {
    ([...numbers].every(this.utils.isValidLottoNumber) === false &&
      this.utils.throwError(ERROR_MESSAGES.ERROR_NOT_RANGE));
  }

  validateBonusNumber(winningNumbers, bonusNumber) {
    (this.utils.isValidLottoNumber(bonusNumber) === false &&
      this.utils.throwError(ERROR_MESSAGES.ERROR_BONUS_NUMBER));

    (winningNumbers.includes(bonusNumber) === true &&
      this.utils.throwError(ERROR_MESSAGES.ERROR_INCLUDE_WINNING_NUMBER));
  }
}

module.exports = Lotto;
