const { ERROR, MIN_NUMBER, MAX_NUBER } = require("../Utils/constant");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }
  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.NUMBERS_LENGTH);
    }
    const setNumbers = new Set(numbers);
    if (setNumbers.size !== numbers.length) {
      throw new Error(ERROR.NUMBERS_DUPLICATION);
    }
    if (numbers.filter((x) => +x < MIN_NUMBER || +x > MAX_NUBER).length > 0) {
      throw new Error(ERROR.NUMBERS_RANGE);
    }
    if (numbers.filter((x) => isNaN(x)).length > 0) {
      throw new Error(ERROR.NUMBERS_ISNAN);
    }
    return true;
  }
}

module.exports = Lotto;
