class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (this.hasDuplicate(numbers)) {
      throw new Error('[ERROR] 로또 번호는 중복이 없어야 합니다.');
    }

    if (this.hasOutOfBoundNumber(numbers)) {
      throw new Error('[ERROR] 로또 번호는 1 이상 45 이하여야 합니다.');
    }
  }

  hasDuplicate(numbers) {
    return numbers.length !== new Set(numbers).size;
  }

  hasOutOfBoundNumber(numbers) {
    return numbers.some(number => number < 1 || number > 45);
  }

  get numbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
