const {
  LOTTO_ERROR,
  LOTTO_LENGTH,
  LOTTO_MIN,
  LOTTO_MAX,
} = require("./util/Constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.checkIsNan(numbers);
    this.checkLength(numbers);
    this.checkRepeat(numbers);
    this.checkRange(numbers);
  }

  checkIsNan(numbers) {
    const isNum = (num) => !isNaN(num);
    if (!numbers.every(isNum)) {
      throw new Error(LOTTO_ERROR.NUM);
    }
  }
  checkLength(numbers) {
    if (numbers.length !== LOTTO_LENGTH) {
      throw new Error(LOTTO_ERROR.LENGTH);
    }
  }
  checkRepeat(numbers) {
    if ([...new Set(numbers)].length !== LOTTO_LENGTH) {
      throw new Error(LOTTO_ERROR.REPEAT);
    }
  }
  checkRange(numbers) {
    const isRange = (num) => num >= LOTTO_MIN && num <= LOTTO_MAX;
    if (!numbers.every(isRange)) {
      throw new Error(LOTTO_ERROR.RANGE);
    }
  }
}

module.exports = Lotto;
