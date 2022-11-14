const Console = require("./utils/Console");
const Constant = require("./Constant");
const Random = require("./utils/Random");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    let uniqueNumbersLength = [...new Set(numbers)].length;
    if (numbers.length !== 6) {
      throw new Error(Constant.LOTTO_NUMBERS_LENGTH_SHOULD_BE6);
    }
    if (numbers.length !== uniqueNumbersLength) {
      throw new Error(Constant.LOTTO_NUMBERS_SHOULD_BE_UNIQUE);
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
