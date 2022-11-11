class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {}

  // TODO: 추가 기능 구현
  getLottoNumbers() {
    return this.#numbers.split(',').map((number) => parseInt(number, 10));
  }
}

module.exports = Lotto;
