const {
  isNumber,
  isInRange,
  isSixNums,
  isDuplicated,
} = require("../src/Exceptions");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    numbers.map((item) => {
      isNumber(item);
      isInRange(item);
    });

    isSixNums(numbers);
    isDuplicated(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
