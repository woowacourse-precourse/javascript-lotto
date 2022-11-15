const { DEFAULT, ERROR } = require("./utils/constant.js");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.check();
  }

  checkLength(numbers) {
    return numbers.length === DEFAULT.LOTTO_LENGTH;
  }

  checkRange(numbers) {
    return numbers.every(
      (number) =>
        number <= DEFAULT.MAX_LOTTO_NUM && number >= DEFAULT.MIN_LOTTO_NUM,
    );
  }

  checkDuplicate(numbers) {
    const set = new Set([...numbers]);
    return set.size === numbers.length;
  }

  checkNumber(numbers) {
    let result = false;

    numbers.forEach((number) => {
      if (number % 1 !== 0) result = result || DEFAULT.TRUE;
    });

    return result;
  }

  check() {
    if (!this.checkLength(this.#numbers)) throw ERROR.LENGTH_ERROR;
    if (this.checkNumber(this.#numbers)) throw ERROR.CORRECT_NUM_ERROR;
    if (!this.checkRange(this.#numbers)) throw ERROR.RANGE_ERROR;
    if (!this.checkDuplicate(this.#numbers)) throw ERROR.DUPLICATE_ERROR;
  }

  getLuckyNumber() {
    return this.#numbers;
  }
}

module.exports = Lotto;
