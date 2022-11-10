const { ERROR_MSG } = require("./utils/string");
const Validation = require("./utils/Validation");

class Lotto {
  #numbers;
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }
  validate(numbers) {
    Validation.throwError(numbers.length !== 6, ERROR_MSG.NUMBER_VAL_COUNT);
    Validation.throwError(this.isNotNumber(numbers), ERROR_MSG.NUMBER_VAL_SIZE);
    Validation.throwError(
      this.isNotInRange(numbers),
      ERROR_MSG.NUMBER_VAL_SIZE
    );
    Validation.throwError(
      this.isduplicate(numbers),
      ERROR_MSG.NUMBER_VAL_DUPLICATE
    );
  }
  isNotNumber(numbers) {
    for (const num of numbers) {
      if (isNaN(num)) {
        return true;
      }
    }
    return false;
  }
  isNotInRange(numbers) {
    for (const num of numbers) {
      if (parseInt(num) === 0 || parseInt(num) > 45) {
        return true;
      }
    }
    return false;
  }
  isduplicate(numbers) {
    const duplicate = numbers.filter((v, i) => i !== numbers.indexOf(v));
    if (duplicate.length !== 0) {
      return true;
    }
    return false;
  }
  getNumbers() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
