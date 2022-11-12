const { LOTTO } = require("./constants");

const ERRORS = Object.freeze({
  LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  DUPLICATION: "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
  RANGE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
});

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers.slice(0, LOTTO.LENGTH);
  }

  get bonusNumber() {
    if (this.#numbers.length === LOTTO.LENGTH + 1) {
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
    if (numbers.length !== LOTTO.LENGTH) {
      throw new Error(ERRORS.LENGTH);
    }
  }

  checkDuplication(numbers) {
    const numberSet = new Set(numbers);
    if ([...numberSet].length !== numbers.length) {
      throw new Error(ERRORS.DUPLICATION);
    }
  }

  checkRangeNumbers(numbers) {
    numbers.forEach(this.checkRange);
  }

  checkRange(number) {
    if (
      typeof number !== "number" ||
      Number.isNaN(Number(number)) ||
      number < LOTTO.RANGE_MIN ||
      number > LOTTO.RANGE_MAX
    ) {
      throw new Error(ERRORS.RANGE);
    }
  }
}

module.exports = Lotto;
