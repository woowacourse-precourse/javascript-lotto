class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (!this.isLength(numbers)) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (!this.isRange(numbers)) {
      throw new Error('[ERROR] 로또 번호는 1이상 45이하의 정수여야 합니다.');
    }
    if (!this.isUnique(numbers)) {
      throw new Error('[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.');
    }
  }

  isLength(numbers) {
    return numbers.length === 6;
  }

  isRange(numbers) {
    return numbers.every((number) => number >= 1 && number <= 45);
  }

  isUnique(numbers) {
    return numbers.length === new Set(numbers).size;
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
