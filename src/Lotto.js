const { LOTTO_SPEC, ERROR_MESSAGES } = require("./constants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers.slice(0, LOTTO_SPEC.LENGTH);
  }

  get bonusNumber() {
    if (this.#numbers.length === LOTTO_SPEC.LENGTH + 1) {
      return this.#numbers[this.#numbers.length - 1];
    }
    return null;
  }

  addBonusNumber(number) {
    this.checkRange(number);
    this.checkDuplication([...this.#numbers, number]);
    this.#numbers.push(number);
  }

  validate(numbers) {
    this.checkLength(numbers);
    this.checkDuplication(numbers);
    this.checkRangeNumbers(numbers);
  }

  checkLength(numbers) {
    if (numbers.length !== LOTTO_SPEC.LENGTH) {
      throw new Error(ERROR_MESSAGES.LOTTO_LENGTH);
    }
  }

  checkDuplication(numbers) {
    const numberSet = new Set(numbers);
    if ([...numberSet].length !== numbers.length) {
      throw new Error(ERROR_MESSAGES.LOTTO_DUPLICATION);
    }
  }

  checkRangeNumbers(numbers) {
    numbers.forEach(this.checkRange);
  }

  checkRange(number) {
    if (
      typeof number !== "number" ||
      Number.isNaN(Number(number)) ||
      number < LOTTO_SPEC.MIN_NUMBER ||
      number > LOTTO_SPEC.MAX_NUMBER
    ) {
      throw new Error(ERROR_MESSAGES.LOTTO_LENGTH);
    }
  }
}

module.exports = Lotto;
