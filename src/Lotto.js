const Utils = require("./Utils");
const { ERROR_MESSAGES, LOTTO_INFO_VALUES } = require("./Constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.utils = new Utils();
    this.#numbers = numbers;
  }

  validate() {
    this.validateNumbersLength();
    this.isOverlapNumbers();
    this.validateEachLottoNumber();
  }

  validateNumbersLength() {
    (this.#numbers.length !== LOTTO_INFO_VALUES.NUMBER_OF_WINNING_NUMBER &&
      this.utils.throwError(ERROR_MESSAGES.ERROR_WINNING_NUMBER));
  }

  isOverlapNumbers() {
    (new Set(this.#numbers).size !== LOTTO_INFO_VALUES.NUMBER_OF_WINNING_NUMBER &&
      this.utils.throwError(ERROR_MESSAGES.ERROR_OVERLAP));
  }

  validateEachLottoNumber() {
    ([...this.#numbers].every(this.utils.isValidLottoNumber) === false &&
      this.utils.throwError(ERROR_MESSAGES.ERROR_NOT_RANGE));
  }

  validateBonusNumber(bonusNumber) {
    (this.utils.isValidLottoNumber(bonusNumber) === false &&
      this.utils.throwError(ERROR_MESSAGES.ERROR_BONUS_NUMBER));

    (this.#numbers.includes(bonusNumber) === true &&
      this.utils.throwError(ERROR_MESSAGES.ERROR_INCLUDE_WINNING_NUMBER));
  }

  getWinningNumbers = () => this.#numbers;
}

module.exports = Lotto;
