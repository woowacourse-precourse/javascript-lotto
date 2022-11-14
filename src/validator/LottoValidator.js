const Exception = require("../exception/exception");
const { ERROR_MESSAGE } = require("../constants/message");
const { LOTTO_NUMBER } = require("../constants/gameCondition");

class LottoValidator {
  validate(numbers) {
    if (!this.isRightLength(numbers))
      Exception.throwError(ERROR_MESSAGE.WORNG_LENGTH);

    if (this.isNumber(numbers))
      Exception.throwError(ERROR_MESSAGE.NOT_LOTTO_NUMBER);

    if (this.isDuplicated(numbers))
      Exception.throwError(ERROR_MESSAGE.IS_DUPLICATE);
  }

  isRightLength(numbers) {
    return numbers.length === LOTTO_NUMBER.COUNT_NUMBER;
  }

  isNumber(numbers) {
    return numbers.forEach((num) => {
      if (isNaN(num)) return false;
    });
  }

  isDuplicated(numbers) {
    return numbers.length !== new Set(numbers).size;
  }
}

module.exports = LottoValidator;
