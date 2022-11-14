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
    if (numbers.some((number) => !Number.isInteger(number))) {
      throw new Error('[ERROR] 로또 번호는 정수여야 합니다.');
    }
    if (numbers.some((number) => !(number >= 1 && number <= 45))) {
      throw new Error('[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.');
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error('[ERROR] 로또 번호는 중복된 숫자를 포함할 수 없습니다.');
    }
  }
}

module.exports = Lotto;
