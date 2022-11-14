class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    if (!this.#hasValidLength(numbers)) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (!this.#hasUniqueValues(numbers)) {
      throw new Error('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
    }

    if (!this.#hasNumberValuesOnly(numbers)) {
      throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
    }

    if (!this.#hasValidRangeValues(numbers)) {
      throw new Error('[ERROR] 로또 번호는 1~45 사이의 수여야 합니다.');
    }
  }

  #hasValidLength(numbers) {
    return numbers.length === 6;
  }

  #hasUniqueValues(numbers) {
    return new Set(numbers).size === 6;
  }

  #hasNumberValuesOnly(numbers) {
    return numbers.every((number) => this.#isNumber(number));
  }

  #isNumber(value) {
    return typeof value === 'number';
  }

  #hasValidRangeValues(numbers) {
    return numbers.some((number) => this.#isInRange(number));
  }

  #isInRange(number) {
    return number >= 1 && number <= 45;
  }
}

module.exports = Lotto;
