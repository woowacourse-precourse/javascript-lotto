const {
  NUMBER_COUNT,
  MIN_NUMBER,
  MAX_NUMBER,
  ERROR,
} = require("../src/utils/constants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (this.isOutOfRange(numbers)) {
      throw new Error(ERROR.OUT_OF_RANGE);
    }

    if (this.hasDuplicate(numbers)) {
      throw new Error(ERROR.DUPLICATED);
    }
  }

  isOutOfRange(numberArray) {
    return numberArray.some(
      (number) => number < MIN_NUMBER || number > MAX_NUMBER
    );
  }

  hasDuplicate(numberArray) {
    if (new Set(numberArray).size !== NUMBER_COUNT) {
      return true;
    }
    return false;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
