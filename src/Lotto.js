const {
  ERROR_MESSAGE_ONLY_SIX_NUMBER,
  ERROR,
} = require("./constants/constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.isNotNumberDuplicate(numbers);
    this.isValidateRange(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(`${ERROR} ${ERROR_MESSAGE_ONLY_SIX_NUMBER}`);
    }
  }

  // TODO: 추가 기능 구현
  isNotNumberDuplicate(numbers) {
    const setNumberArr = new Set(numbers);
    if (setNumberArr.size !== 6) {
      throw new Error(`${ERROR} ${ERROR_MESSAGE_ONLY_SIX_NUMBER}`);
    }
  }

  isValidateRange(numbers) {
    if (0 < numbers <= 45) {
      return true;
    }
    throw new Error(`${ERROR} ${ERROR_MESSAGE_BETWEEN_ONE_TO_FORTYFIVE}`);
  }
}

module.exports = Lotto;
