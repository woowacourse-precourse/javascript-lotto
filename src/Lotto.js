const {
  ERROR_MESSAGE_ONLY_SIX_NUMBER,
  ERROR,
  MIN_LOTTO_VALUE,
  MAX_LOTTO_VALUE,
} = require("./constants/constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.isNotNumberDuplicate(numbers);
    this.isValidateNumberRange(numbers);
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

  isValidateNumberRange(numbers) {
    let flag = true;
    numbers.map((number) => {
      if (number < MIN_LOTTO_VALUE || number > MAX_LOTTO_VALUE) {
        flag = false;
        throw new Error(`${ERROR} ${ERROR_MESSAGE_BETWEEN_ONE_TO_FORTYFIVE}`);
      }
    });
  }
}

module.exports = Lotto;
