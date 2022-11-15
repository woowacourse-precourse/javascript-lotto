const Exception = require("../exception/exception");
const { ERROR_MESSAGE } = require("../constants/message");
const { LOTTO_NUMBER } = require("../constants/gameCondition");

class BonusValidator {
  #bonus;

  constructor(bonus, winNumbers) {
    this.#validate(this.#toInteger(bonus), winNumbers);
  }

  #validate(bonus, winNumbers) {
    if (!this.#isNumber(bonus))
      Exception.throwError(ERROR_MESSAGE.BONUS_NOT_NUMBER);

    if (this.#isDuplicated(bonus, winNumbers))
      Exception.throwError(ERROR_MESSAGE.BONUS_DUPLICATE);

    if (this.#isNotInLottoNumberBoundary(bonus))
      Exception.throwError(ERROR_MESSAGE.BONUS_NUMBERS_IN_LOTTO_BOUNDARY);
  }

  #toInteger(bonus) {
    return parseInt(bonus, 10);
  }

  #isNumber(bonus) {
    return Number.isInteger(bonus);
  }

  #isDuplicated(bonus, winNumbers) {
    const winNumbersArr = winNumbers
      .split(",")
      .map((str) => str.trim())
      .map((str) => parseInt(str));

    return winNumbersArr.includes(bonus);
  }

  #isNotInLottoNumberBoundary(bonus) {
    return bonus < LOTTO_NUMBER.START_NUMBER || bonus > LOTTO_NUMBER.END_NUMBER;
  }
}

module.exports = BonusValidator;
