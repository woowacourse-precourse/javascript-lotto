const { ERROR } = require("./constants/messges");
const { LOTTO } = require("./constants/values");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.checkNumber(numbers);
    this.checkLength(numbers);
    this.checkRange(numbers);
    this.checkDuplicate(numbers);
  }

  checkNumber(numbers) {
    const invalidList = numbers.filter((number) => {
      return isNaN(number);
      // Error: 숫자+숫자아닌값 조합인 경우 예외 처리가 되지 않음.
    });
    if (invalidList.length > 0) {
      throw new Error(ERROR.LOTTO_NUMBER);
    }
  }

  checkLength(numbers) {
    if (numbers.length !== LOTTO.LENGTH) {
      throw new Error(ERROR.LOTTO_LENGTH);
    }
  }

  checkRange(numbers) {
    numbers.forEach((number) => {
      if (number < LOTTO.MINIMUM || number > LOTTO.MAXIMUM) {
        throw new Error(ERROR.LOTTO_RANGE);
      }
    });
  }

  checkDuplicate(numbers) {
    if ([...new Set(numbers)].length < LOTTO.LENGTH) {
      throw new Error(ERROR.LOTTO_DUPLICATE);
    }
  }
}

module.exports = Lotto;
