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
    if (!Array.isArray(numbers)) {
      throw new Error('[ERROR] 배열이 아닙니다.');
    }
    if ([...new Set(numbers)].length !== 6) {
      throw new Error('[ERROR] 로또 번호가 중복되면 안됩니다.');
    }
  }

  show() {
    return this.#numbers.sort((a, b) => a - b);
  }
}

module.exports = Lotto;
