const { ERROR_MSG } = require("./constants/Message");
const Utils = require("./Utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    numbers.sort((a, b) => a - b);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw Utils.error(ERROR_MSG.WRONG_LENGTH);
    }
    if (new Set(numbers).size !== 6) {
      throw Utils.error(ERROR_MSG.NOT_DUPLICATED);
    }
    if (numbers.some((value) => !Utils.isNumber(value))) {
      throw Utils.error(ERROR_MSG.ONLY_NUMBER);
    }
    if (this.isNotLottoNumber(numbers)) {
      throw Utils.error(ERROR_MSG.OVER_RANGE);
    }
  }
  isNotLottoNumber(number) {
    return number.some((value) => value < 1 || value > 45);
  }
  isIncludes(number) {
    return this.#numbers.includes(number);
  }

  getLotto() {
    return `[${this.#numbers.join(", ")}]`;
  }
}

module.exports = Lotto;
