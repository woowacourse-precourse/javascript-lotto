const { ERROR } = require("../src/utils/constants");
const { isOutOfRange, hasDuplicate } = require("../src/utils/utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (isOutOfRange(numbers)) {
      throw new Error(ERROR.OUT_OF_RANGE);
    }

    if (hasDuplicate(numbers)) {
      throw new Error(ERROR.DUPLICATED);
    }
  }

  toString() {
    return `[${this.#numbers.join(", ")}]`;
  }
}

module.exports = Lotto;
