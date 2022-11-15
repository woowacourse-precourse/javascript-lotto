const Exception = require("../exception/exception");
const { ERROR_MESSAGE } = require("../constants/message");
const { LOTTO_NUMBER } = require("../constants/gameCondition");

class WinNumbersValidator {
  #numbers;

  constructor(numbers) {
    this.#validate(this.#toArray(numbers));
  }

  #validate(numbers) {
    if (this.#isNotNumber(numbers))
      Exception.throwError(ERROR_MESSAGE.WIN_NUMBERS_NOT_NUMBER);

    if (!this.#isRightLength(numbers))
      Exception.throwError(ERROR_MESSAGE.WIN_NUMBERS_RIGHT_LENGTH);

    if (this.#isDuplicated(numbers))
      Exception.throwError(ERROR_MESSAGE.WIN_NUMBERS_DUPLICATE);

    if (this.#isNotInLottoNumberBoundary(numbers))
      Exception.throwError(ERROR_MESSAGE.WIN_NUMBERS_IN_LOTTO_BOUNDARY);
  }

  #toArray(numbers) {
    return numbers
      .split(",")
      .map((str) => str.trim())
      .map((str) => parseInt(str));
  }

  #isNotNumber(numbers) {
    return numbers.filter((num) => !Number.isInteger(num)).length > 0;
  }

  #isRightLength(numbers) {
    return numbers.length === LOTTO_NUMBER.COUNT_NUMBER;
  }

  #isDuplicated(numbers) {
    return numbers.length !== new Set(numbers).size;
  }

  #isNotInLottoNumberBoundary(numbers) {
    return (
      numbers.filter(
        (num) =>
          num < LOTTO_NUMBER.START_NUMBER || num > LOTTO_NUMBER.END_NUMBER
      ).length > 0
    );
  }
}

module.exports = WinNumbersValidator;
